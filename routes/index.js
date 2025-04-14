require("dotenv").config();
var express = require("express");
var router = express.Router();
const axios = require("axios");
const fs = require("fs");
const https = require("https");
const xml2js = require("xml2js");

const parser = new xml2js.Parser({
  explicitArray: false,
  ignoreAttrs: true,
  tagNameProcessors: [xml2js.processors.stripPrefix],
});

// Decode base64-encoded PFX certificate from the environment variable
const pfxBuffer = Buffer.from(process.env.PFX_BASE64, "base64");
const passphrase = process.env.PFX_PASSPHRASE;

const httpsAgent = new https.Agent({
  pfx: pfxBuffer,
  passphrase: passphrase,
  rejectUnauthorized: false,
});

router.post("/verify-nif", async (req, res) => {
  const { nif, nombre } = req.body;

  if (!nif || !nombre) {
    return res.status(400).json({ error: "NIF and Nombre are required" });
  }

  const xmlRequest = `
  <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:vnif="http://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/burt/jdit/ws/VNifV2Ent.xsd">
    <soapenv:Header/>
    <soapenv:Body>
      <vnif:VNifV2Ent>
        <vnif:Contribuyente>
          <vnif:Nif>${nif}</vnif:Nif>
          <vnif:Nombre>${nombre}</vnif:Nombre>
        </vnif:Contribuyente>
      </vnif:VNifV2Ent>
    </soapenv:Body>
  </soapenv:Envelope>`;

  try {
    const response = await axios.post(
      "https://www1.agenciatributaria.gob.es/wlpl/BURT-JDIT/ws/VNifV2SOAP",
      xmlRequest,
      {
        headers: {
          "Content-Type": "text/xml; charset=utf-8",
          SOAPAction: "",
        },
        httpsAgent: httpsAgent,
      }
    );

    if (!response.data.startsWith("<")) {
      throw new Error("La respuesta del servicio AEAT no es XML válido");
    }

    const parsed = await parser.parseStringPromise(response.data);
    const contribuyente = parsed.Envelope.Body.VNifV2Sal.Contribuyente;

    if (contribuyente.Resultado === "IDENTIFICADO") {
      res.status(200).json({
        success: true,
        nif: contribuyente.Nif,
        nombre: contribuyente.Nombre.trim(),
        resultado: contribuyente.Resultado,
      });
    } else {
      res.status(404).json({
        success: false,
        error: "Validation failed",
        resultado: contribuyente.Resultado,
        message: "NIF and name combination not recognized by AEAT",
      });
    }
  } catch (error) {
    console.error("Error:", error.message);

    if (error.message.includes("XML") || error.message.includes("parse")) {
      return res.status(500).json({
        error: "XML Parsing Error",
        message: "Failed to parse AEAT response",
      });
    }

    const statusCode = error.response.status || 500;
    res.status(statusCode).json({
      error: error.response ? "AEAT Service Error" : "Internal Server Error",
      details: error.response ? error.response.data : error.message,
    });
  }
});

router.post("/send-invoice", async (req, res) => {
  const invoice = req.body;

  if (
    !invoice ||
    !invoice.nif ||
    !invoice.nombre ||
    !invoice.numSerie ||
    !invoice.fecha ||
    !invoice.detalles
  ) {
    return res.status(400).json({ error: "Missing required invoice fields" });
  }

  const xmlRequest = `
  <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:sum="https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroLR.xsd"
    xmlns:sum1="https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroInformacion.xsd">
    <soapenv:Header/>
    <soapenv:Body>
      <sum:RegFactuSistemaFacturacion>
        <sum:Cabecera>
          <sum1:ObligadoEmision>
            <sum1:NombreRazon>${invoice.nombre}</sum1:NombreRazon>
            <sum1:NIF>${invoice.nif}</sum1:NIF>
          </sum1:ObligadoEmision>
        </sum:Cabecera>
        <sum:RegistroFactura>
          <sum1:RegistroAlta>
            <sum1:IDVersion>1.0</sum1:IDVersion>
            <sum1:IDFactura>
              <sum1:IDEmisorFactura>${invoice.nif}</sum1:IDEmisorFactura>
              <sum1:NumSerieFactura>${invoice.numSerie}</sum1:NumSerieFactura>
              <sum1:FechaExpedicionFactura>${
                invoice.fecha
              }</sum1:FechaExpedicionFactura>
            </sum1:IDFactura>
            <sum1:NombreRazonEmisor>${invoice.nombre}</sum1:NombreRazonEmisor>
            <sum1:TipoFactura>F1</sum1:TipoFactura>
            <sum1:DescripcionOperacion>${
              invoice.descripcion || "Sin descripción"
            }</sum1:DescripcionOperacion>
            <sum1:Destinatarios>
              <sum1:IDDestinatario>
                <sum1:NombreRazon>${invoice.destNombre}</sum1:NombreRazon>
                <sum1:NIF>${invoice.destNif}</sum1:NIF>
              </sum1:IDDestinatario>
            </sum1:Destinatarios>
            <sum1:Desglose>
              ${invoice.detalles
                .map(
                  (item) => `
                <sum1:DetalleDesglose>
                  <sum1:ClaveRegimen>${item.clave}</sum1:ClaveRegimen>
                  <sum1:CalificacionOperacion>${item.calif}</sum1:CalificacionOperacion>
                  <sum1:TipoImpositivo>${item.tipo}</sum1:TipoImpositivo>
                  <sum1:BaseImponibleOimporteNoSujeto>${item.base}</sum1:BaseImponibleOimporteNoSujeto>
                  <sum1:CuotaRepercutida>${item.cuota}</sum1:CuotaRepercutida>
                </sum1:DetalleDesglose>`
                )
                .join("")}
            </sum1:Desglose>
            <sum1:CuotaTotal>${invoice.cuotaTotal}</sum1:CuotaTotal>
            <sum1:ImporteTotal>${invoice.total}</sum1:ImporteTotal>
          </sum1:RegistroAlta>
        </sum:RegistroFactura>
      </sum:RegFactuSistemaFacturacion>
    </soapenv:Body>
  </soapenv:Envelope>`;

  try {
    const response = await axios.post(
      "https://prewww1.aeat.es/FacturacionSIF/ws/AltaLRFacturas", // Replace with actual AEAT test endpoint
      xmlRequest,
      {
        headers: { "Content-Type": "text/xml" },
        httpsAgent: httpsAgent,
      }
    );

    const parsed = await parser.parseStringPromise(response.data);
    res.json({ success: true, aeatResponse: parsed });
  } catch (error) {
    console.error("AEAT Error:", error.message);
    res
      .status(500)
      .json({ error: "Failed to send invoice", details: error.message });
  }
});

module.exports = router;

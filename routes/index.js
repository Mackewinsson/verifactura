require("dotenv").config();
const crypto = require("crypto");
var express = require("express");
var router = express.Router();
const axios = require("axios");
const fs = require("fs");
const https = require("https");
const xml2js = require("xml2js");
const { log } = require("console");
const {
  validateNIF,
  validateInvoice,
  validateRequest,
} = require("../middleware/validation");
const { AppError } = require("../middleware/errorHandler");

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

router.post(
  "/verify-nif",
  validateNIF,
  validateRequest,
  async (req, res, next) => {
    const { nif, nombre } = req.body;

    // Normalize NIF to uppercase and escape XML special characters
    const normalizedNif = nif.trim().toUpperCase();
    const escapeXml = (str) => {
      return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
    };

    const xmlRequest = `
  <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:vnif="http://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/burt/jdit/ws/VNifV2Ent.xsd">
    <soapenv:Header/>
    <soapenv:Body>
      <vnif:VNifV2Ent>
        <vnif:Contribuyente>
          <vnif:Nif>${escapeXml(normalizedNif)}</vnif:Nif>
          <vnif:Nombre>${escapeXml(nombre.trim())}</vnif:Nombre>
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
        throw new AppError(
          "La respuesta del servicio AEAT no es XML válido",
          500,
          null,
          "XMLParseError"
        );
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
      if (error instanceof AppError) {
        next(error);
      } else if (
        error.message.includes("XML") ||
        error.message.includes("parse")
      ) {
        next(
          new AppError(
            "Failed to parse AEAT response",
            500,
            error.message,
            "XMLParseError"
          )
        );
      } else {
        next(
          new AppError(
            "AEAT Service Error",
            502,
            (error.response && error.response.data) || error.message,
            "AEATServiceError"
          )
        );
      }
    }
  }
);

router.post(
  "/send-invoice",
  validateInvoice,
  validateRequest,
  async (req, res, next) => {
    const invoice = req.body;

    // Normalize NIFs to uppercase and escape XML special characters
    const escapeXml = (str) => {
      if (!str) return "";
      return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
    };
    const normalizeNif = (nif) => (nif ? nif.trim().toUpperCase() : "");
    const normalizedNif = normalizeNif(invoice.nif);
    const normalizedDestNif = normalizeNif(invoice.destNif || invoice.nif);
    const registroAnterior =
      invoice.encadenamiento?.registroAnterior || invoice.registroAnterior;

    const ensureDateDDMMYYYY = (value, fieldName) => {
      if (!value || !/^\d{2}-\d{2}-\d{4}$/.test(value.trim())) {
        throw new AppError(
          `${fieldName} must be in DD-MM-YYYY format`,
          400,
          null,
          "ValidationError"
        );
      }
      return value.trim();
    };

    const formatTimestampWithOffset = (date) => {
      const d = date || new Date();
      const pad = (num) => String(num).padStart(2, "0");
      const offsetMinutes = -d.getTimezoneOffset();
      const sign = offsetMinutes >= 0 ? "+" : "-";
      const abs = Math.abs(offsetMinutes);
      const offsetHours = pad(Math.floor(abs / 60));
      const offsetMins = pad(abs % 60);
      return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(
        d.getDate()
      )}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(
        d.getSeconds()
      )}${sign}${offsetHours}:${offsetMins}`;
    };

    function generarHuellaDesdeFactura(factura, registroAnteriorHuella) {
      const timestamp = formatTimestampWithOffset(new Date());
      const valores = [
        `IDEmisorFactura=${factura.nif ? factura.nif.trim().toUpperCase() : ""}`,
        `NumSerieFactura=${factura.numSerie ? factura.numSerie.trim() : ""}`,
        `FechaExpedicionFactura=${factura.fecha ? factura.fecha.trim() : ""}`,
        `TipoFactura=${
          factura.tipoFactura ? factura.tipoFactura.trim() : "F1"
        }`,
        `CuotaTotal=${Number(factura.cuotaTotal).toFixed(2)}`,
        `ImporteTotal=${Number(factura.total).toFixed(2)}`,
        `Huella=${registroAnteriorHuella || ""}`,
        `FechaHoraHusoGenRegistro=${timestamp}`,
      ];
      const datosCanonicos = valores.join("&");

      console.log("📦 Cadena para hash:", datosCanonicos);

      const hash = crypto
        .createHash("sha256")
        .update(datosCanonicos, "utf8")
        .digest("hex")
        .toUpperCase();

      console.log("🔐 Huella generada:", hash);
      console.log("📏 Longitud de la huella:", hash.length);

      if (hash.length !== 64) {
        throw new Error(
          "La huella generada no tiene la longitud de 64 caracteres requerida."
        );
      }

      return { huella: hash, tipo: "SHA-256", fechaHora: timestamp };
    }

    try {
      if (!registroAnterior) {
        throw new AppError(
          "Encadenamiento.registroAnterior is required to comply with Veri*Factu chaining",
          400,
          null,
          "ValidationError"
        );
      }

      const fechaExpedicion = ensureDateDDMMYYYY(
        invoice.fecha,
        "FechaExpedicionFactura"
      );

      const fechaRegistroAnterior = ensureDateDDMMYYYY(
        registroAnterior.fechaExpedicionFactura,
        "Encadenamiento.RegistroAnterior.FechaExpedicionFactura"
      );

      const {
        huella,
        tipo,
        fechaHora: fechaHoraGeneracion,
      } = generarHuellaDesdeFactura(invoice, registroAnterior.huella);

      console.log("🧾 TipoHuella enviado:", tipo);
      console.log("🧾 Huella enviada:", huella, "Longitud:", huella.length);

      // Normaliza importes/valores numéricos de detalle a string con punto decimal.
      const sanitizedDetalles = (invoice.detalles || []).map((d, idx) => {
        const base = Number(d.base);
        const cuota = Number(d.cuota);
        const tipo = Number(d.tipo);
        if ([base, cuota, tipo].some((n) => Number.isNaN(n))) {
          throw new AppError(
            `Detalle ${idx + 1} tiene importes no numéricos`,
            400,
            null,
            "ValidationError"
          );
        }
        return {
          clave: (d.clave || "").trim(),
          calif: (d.calif || "").trim(),
          tipo: tipo.toFixed(2).replace(/\.00$/, ".0"),
          base: base.toFixed(2).replace(/\.00$/, ".0"),
          cuota: cuota.toFixed(2).replace(/\.00$/, ".0"),
        };
      });

      const xmlRequest = `
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
      xmlns:sum="https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroLR.xsd"
      xmlns:sum1="https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroInformacion.xsd">
      <soapenv:Header/>
      <soapenv:Body>
        <sum:RegFactuSistemaFacturacion>
          <sum:Cabecera>
            <sum1:ObligadoEmision>
              <sum1:NombreRazon>${escapeXml(invoice.nombre.trim())}</sum1:NombreRazon>
              <sum1:NIF>${escapeXml(normalizedNif)}</sum1:NIF>
            </sum1:ObligadoEmision>
          </sum:Cabecera>
          <sum:RegistroFactura>
            <sum1:RegistroAlta>
              <sum1:IDVersion>1.0</sum1:IDVersion>
              <sum1:IDFactura>
                <sum1:IDEmisorFactura>${escapeXml(normalizedNif)}</sum1:IDEmisorFactura>
                <sum1:NumSerieFactura>${escapeXml(invoice.numSerie.trim())}</sum1:NumSerieFactura>
                <sum1:FechaExpedicionFactura>${fechaExpedicion}</sum1:FechaExpedicionFactura>
              </sum1:IDFactura>
              <sum1:NombreRazonEmisor>${escapeXml(invoice.nombre.trim())}</sum1:NombreRazonEmisor>
              <sum1:TipoFactura>${
                invoice.tipoFactura || "F1"
              }</sum1:TipoFactura>
              <sum1:DescripcionOperacion>${escapeXml(
                (invoice.descripcion || "Operación genérica").trim()
              )}</sum1:DescripcionOperacion>
              <sum1:Destinatarios>
                <sum1:IDDestinatario>
                  <sum1:NombreRazon>${escapeXml(
                    (invoice.destNombre || invoice.nombre).trim()
                  )}</sum1:NombreRazon>
                  <sum1:NIF>${escapeXml(normalizedDestNif)}</sum1:NIF>
              </sum1:IDDestinatario>
            </sum1:Destinatarios>
            <sum1:Desglose>
              ${sanitizedDetalles
                .map(
                  (d) => `
              <sum1:DetalleDesglose>
                <sum1:ClaveRegimen>${d.clave}</sum1:ClaveRegimen>
                <sum1:CalificacionOperacion>${d.calif}</sum1:CalificacionOperacion>
                <sum1:TipoImpositivo>${d.tipo}</sum1:TipoImpositivo>
                <sum1:BaseImponibleOimporteNoSujeto>${d.base}</sum1:BaseImponibleOimporteNoSujeto>
                <sum1:CuotaRepercutida>${d.cuota}</sum1:CuotaRepercutida>
              </sum1:DetalleDesglose>`
                )
                .join("")}
            </sum1:Desglose>
            <sum1:CuotaTotal>${Number(invoice.cuotaTotal)
              .toFixed(2)
              .replace(/\.00$/, ".0")}</sum1:CuotaTotal>
            <sum1:ImporteTotal>${Number(invoice.total)
              .toFixed(2)
              .replace(/\.00$/, ".0")}</sum1:ImporteTotal>
            <sum1:Encadenamiento>
              <sum1:RegistroAnterior>
                <sum1:IDEmisorFactura>${escapeXml(
                  registroAnterior.idEmisorFactura ||
                    registroAnterior.IDEmisorFactura ||
                      normalizedNif
                  )}</sum1:IDEmisorFactura>
                  <sum1:NumSerieFactura>${escapeXml(
                    registroAnterior.numSerieFactura ||
                      registroAnterior.NumSerieFactura ||
                      ""
                  )}</sum1:NumSerieFactura>
                  <sum1:FechaExpedicionFactura>${escapeXml(
                    fechaRegistroAnterior
                  )}</sum1:FechaExpedicionFactura>
                  <sum1:Huella>${escapeXml(
                    registroAnterior.huella || ""
                  )}</sum1:Huella>
                </sum1:RegistroAnterior>
              </sum1:Encadenamiento>
              <sum1:SistemaInformatico>
                <sum1:NombreRazon>${escapeXml(
                  (invoice.sistemaInformatico?.nombreRazon ||
                    invoice.nombre)
                    .trim()
                )}</sum1:NombreRazon>
                <sum1:NIF>${escapeXml(
                  normalizeNif(invoice.sistemaInformatico?.nif) || normalizedNif
                )}</sum1:NIF>
                <sum1:NombreSistemaInformatico>${escapeXml(
                  (
                    invoice.sistemaInformatico?.nombreSistemaInformatico ||
                    invoice.nombreSistema ||
                    "MiSistemaVerifactu"
                  ).trim()
                )}</sum1:NombreSistemaInformatico>
                <sum1:IdSistemaInformatico>${escapeXml(
                  invoice.sistemaInformatico?.idSistemaInformatico || "01"
                )}</sum1:IdSistemaInformatico>
                <sum1:Version>${escapeXml(
                  invoice.sistemaInformatico?.version || "1.0.3"
                )}</sum1:Version>
                <sum1:NumeroInstalacion>${escapeXml(
                  invoice.sistemaInformatico?.numeroInstalacion ||
                    invoice.numeroInstalacion ||
                    "1"
                )}</sum1:NumeroInstalacion>
                <sum1:TipoUsoPosibleSoloVerifactu>${escapeXml(
                  invoice.sistemaInformatico?.tipoUsoPosibleSoloVerifactu ||
                    "N"
                )}</sum1:TipoUsoPosibleSoloVerifactu>
                <sum1:TipoUsoPosibleMultiOT>${escapeXml(
                  invoice.sistemaInformatico?.tipoUsoPosibleMultiOT || "N"
                )}</sum1:TipoUsoPosibleMultiOT>
                <sum1:IndicadorMultiplesOT>${escapeXml(
                  invoice.sistemaInformatico?.indicadorMultiplesOT || "N"
                )}</sum1:IndicadorMultiplesOT>
              </sum1:SistemaInformatico>
              <sum1:FechaHoraHusoGenRegistro>${fechaHoraGeneracion}</sum1:FechaHoraHusoGenRegistro>
              <sum1:TipoHuella>01</sum1:TipoHuella>
              <sum1:Huella>${huella}</sum1:Huella>
            </sum1:RegistroAlta>
          </sum:RegistroFactura>
        </sum:RegFactuSistemaFacturacion>
      </soapenv:Body>
    </soapenv:Envelope>
    `;
      console.log("📦 XML Request:", xmlRequest);

      const response = await axios.post(
        "https://prewww1.aeat.es/wlpl/TIKE-CONT/ws/SistemaFacturacion/VerifactuSOAP",
        xmlRequest,
        {
          headers: {
            "Content-Type": "text/xml; charset=utf-8",
          },
          httpsAgent: httpsAgent,
          timeout: 30000,
        }
      );

      if (!response.data || typeof response.data !== "string") {
        throw new AppError(
          "AEAT response is empty or not XML",
          502,
          response.data,
          "AEATServiceError"
        );
      }

      const parsed = await parser.parseStringPromise(response.data);
      res.json({ success: true, aeatResponse: parsed });
    } catch (error) {
      if (error instanceof AppError) {
        next(error);
      } else if (
        error.message.includes("XML") ||
        error.message.includes("parse")
      ) {
        next(
          new AppError(
            "Failed to parse AEAT response",
            500,
            error.message,
            "XMLParseError"
          )
        );
      } else {
        next(
          new AppError(
            "AEAT Service Error",
            502,
            (error.response && error.response.data) || error.message,
            "AEATServiceError"
          )
        );
      }
    }
  }
);

module.exports = router;

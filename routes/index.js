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

module.exports = router;

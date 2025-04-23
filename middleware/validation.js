const { body, validationResult } = require("express-validator");

const validateNIF = [
  body("nif")
    .not()
    .isEmpty()
    .withMessage("NIF is required")
    .matches(/^[0-9]{8}[A-Z]$|^[A-Z][0-9]{7}[A-Z]$/)
    .withMessage("Invalid NIF format"),
  body("nombre")
    .not()
    .isEmpty()
    .withMessage("Nombre is required")
    .trim()
    .isLength({ min: 1, max: 120 })
    .withMessage("Nombre must be between 1 and 120 characters"),
];

const validateInvoice = [
  body("nif")
    .not()
    .isEmpty()
    .withMessage("NIF is required")
    .matches(/^[0-9]{8}[A-Z]$|^[A-Z][0-9]{7}[A-Z]$/)
    .withMessage("Invalid NIF format"),
  body("nombre")
    .not()
    .isEmpty()
    .withMessage("Nombre is required")
    .trim()
    .isLength({ min: 1, max: 120 })
    .withMessage("Nombre must be between 1 and 120 characters"),
  body("numSerie")
    .not()
    .isEmpty()
    .withMessage("numSerie is required")
    .trim()
    .isLength({ min: 1, max: 60 })
    .withMessage("numSerie must be between 1 and 60 characters"),
  body("fecha")
    .not()
    .isEmpty()
    .withMessage("Fecha is required")
    .matches(/^\d{2}-\d{2}-\d{4}$/)
    .withMessage("Fecha must be in DD-MM-YYYY format"),
  body("tipoFactura")
    .optional()
    .isIn(["F1", "F2", "R1", "R2", "R3", "R4", "R5"])
    .withMessage("Invalid tipoFactura"),
  body("detalles")
    .isArray({ min: 1 })
    .withMessage("At least one detail is required"),
  body("detalles.*.clave")
    .not()
    .isEmpty()
    .withMessage("Clave is required in details")
    .matches(/^[0-9]{2}$/)
    .withMessage("Invalid clave format"),
  body("detalles.*.calif")
    .not()
    .isEmpty()
    .withMessage("Calif is required in details")
    .matches(/^[A-Z][0-9]$/)
    .withMessage("Invalid calif format"),
  body("detalles.*.tipo")
    .isFloat({ min: 0, max: 100 })
    .withMessage("Tipo must be a number between 0 and 100"),
  body("detalles.*.base")
    .isFloat({ min: 0 })
    .withMessage("Base must be a positive number"),
  body("detalles.*.cuota")
    .isFloat({ min: 0 })
    .withMessage("Cuota must be a positive number"),
  body("cuotaTotal")
    .isFloat({ min: 0 })
    .withMessage("cuotaTotal must be a positive number"),
  body("total")
    .isFloat({ min: 0 })
    .withMessage("total must be a positive number"),
];

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      error: "Validation Error",
      details: errors.array().map((err) => ({
        field: err.param,
        message: err.msg,
      })),
    });
  }
  next();
};

module.exports = {
  validateNIF,
  validateInvoice,
  validateRequest,
};

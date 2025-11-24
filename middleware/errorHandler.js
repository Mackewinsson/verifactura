class AppError extends Error {
  constructor(message, statusCode, details = null) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

const errorHandler = (err, req, res, next) => {
  // Only log actual errors (not 404s which are expected)
  const statusCode = err.status || err.statusCode || 500;
  if (statusCode >= 500) {
    console.error("Error:", err);
  }

  // Default error response
  const response = {
    success: false,
    error: err.message || "Internal Server Error",
    ...(err.details && { details: err.details }),
  };

  // Handle specific error types
  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      error: "Validation Error",
      details: err.details,
    });
  }

  if (err.name === "AEATServiceError") {
    return res.status(502).json({
      success: false,
      error: "AEAT Service Error",
      details: err.details,
    });
  }

  if (err.name === "XMLParseError") {
    return res.status(500).json({
      success: false,
      error: "XML Parsing Error",
      details: err.details,
    });
  }

  // Handle http-errors (like 404 from createError)
  if (err.status) {
    return res.status(err.status).json({
      success: false,
      error: err.message || "Not Found",
      ...(err.details && { details: err.details }),
    });
  }

  // Handle operational errors
  if (err.isOperational) {
    return res.status(err.statusCode || 500).json(response);
  }

  // Handle unexpected errors
  return res.status(500).json({
    success: false,
    error: "Internal Server Error",
    message:
      process.env.NODE_ENV === "development"
        ? err.message
        : "An unexpected error occurred",
  });
};

module.exports = {
  AppError,
  errorHandler,
};

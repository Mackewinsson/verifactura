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
  console.error("Error:", err);

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

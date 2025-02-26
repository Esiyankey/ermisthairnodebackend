const AppError = require("../utils/appError");

const sendErrorDev = (error, res) => {
  const statusCode = error.statusCode || 500;
  const status = error.status || "error";
  const message = error.message;
  const stack = error.stack;

  res.status(statusCode).json({
    status,
    message,
    stack,
  });
};

const sendErrorProd = (error, res) => {
  const statusCode = error.statusCode || 500;
  const status = error.status || "error";
  const message = error.message;
  const stack = error.stack;

  if (error.isOperational) {
    res.status(statusCode).json({
      status,
      message,
      stack,
    });
  }
 
};

const globalErrorHandler = (err, req, res, next) => {
  let error = "";

  if (err.code === 5001) {
    error = new AppError();
  }
  if (process.env.NODE_ENV === "development") {
    return sendErrorDev(err, res);
  }
  sendErrorProd(err, res);
};
module.exports = globalErrorHandler;

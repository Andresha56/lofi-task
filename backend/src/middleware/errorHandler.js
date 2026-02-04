const errorHandler = (err, req, res) => {
  // If there is no status code, default to 500 Internal Server Error
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.ENV === "prod" ? null : err.stack,
  });
};

export default errorHandler;

const logErrors = (error, req, res, next) => {
  console.log('Log Errors');
  console.error(error);
  next(error);
};

const errorHandler = (error, req, res, next) => {
  console.log('Error Handler');
  res.status(500).json({ message: error.message, stack: error.stack });
};

const boomErrorHandler = (error, req, res, next) => {
  console.log('Boom Error Handler');
  if (error.isBoom) {
    const { output: { statusCode, payload } } = error;
    res.status(statusCode).json(payload);
  } else {
    next(error);
  }
};

export { logErrors, errorHandler, boomErrorHandler };

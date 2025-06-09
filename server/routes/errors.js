export const clientErrorHandler = (req, res, next) => {
  const error = new Error('Not found')
  error.statusCode = 404
  next(error)
}

export const errorHandler = (err, req, res, next) => {
  if (!err.statusCode) {
    err.statusCode = 501
  }

  if (!err.message) {
    err.message = 'Internal server error'
  }

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
    status: err.statusCode
  })
}


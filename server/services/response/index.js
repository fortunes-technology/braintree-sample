export const handleSuccess = (res, result = {}, status = 200) => {
  return res.status(status || 200).json({success: true, ...result})
}

export const notFound = (res) => {
  res.status(404).end()
  return null
}

export const handleError = (res, err = {message: 'Internal Server Error'}, status = 500) => {
  console.error(new Date(), 'handleError : ', err)
  const errorMessage = (typeof err === 'string') ? err : err.message
  const response = {
    success: false,
    message: errorMessage || 'Something went wrong'
  }
  return res.status(status).send(response)
}

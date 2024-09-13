const jwt = require('jsonwebtoken')

const generateSignature = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

const verifySignature = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports = { generateSignature, verifySignature }

const { default: mongoose } = require('mongoose')

const reporterSchema = new mongoose.Schema({
  givenName: { type: String, require: true },
  telephone: { type: Number }
})

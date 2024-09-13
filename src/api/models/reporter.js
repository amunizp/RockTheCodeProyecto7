const { default: mongoose } = require('mongoose')
const bcrypt = require('bcrypt')
const reporterSchema = new mongoose.Schema(
  {
    reporterName: { type: String, require: true },
    telephone: { type: Number },
    email: { type: String },
    password: { type: String, required: true },
    admin: { type: Boolean, require: false, default: false }
  },
  { timestamps: true, collection: 'reporters' }
)

reporterSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password, 10)
})

const Reporter = mongoose.model('reporters', reporterSchema, 'reporters')
module.exports = { Reporter }

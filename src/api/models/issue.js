const { default: mongoose } = require('mongoose')

const issueSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true
    },
    reporter: { type: String, required: false },
    resolved: { type: Boolean, required: true }
  },
  {
    timestamps: true,
    collection: 'issues'
  }
)

const Issue = mongoose.model('issues', issueSchema, 'issues')
module.exports = { Issue }

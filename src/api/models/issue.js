const { default: mongoose } = require('mongoose')

const issueSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true
    },
    user: { type: String, required: false }
  },
  {
    timestamps: true,
    collection: 'issues'
  }
)

const Issue = mongoose.model('issues', issueSchema, 'issues')
module.exports = { Issue }

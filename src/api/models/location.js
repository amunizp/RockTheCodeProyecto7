const { default: mongoose } = require('mongoose')

courts = [
  'Milton',
  'Gray',
  'Brooke',
  'Marlowe',
  'Spencer',
  'Shelley',
  'Pope',
  'Byron',
  'Coleridge',
  'Herrick',
  'Dryden',
  'Tennyson'
]
const locationSchema = new mongoose.Schema(
  {
    geo: {
      type: {
        type: String,
        enum: ['Point'],
        required: false
      },
      coordinates: {
        type: [Number],
        required: false
      }
    },
    court: { type: String, required: false, enum: courts },
    courtNumber: {
      type: Number,
      required: false,
      validate: {
        validator: (value) => value > 0 && value <= 18,
        message: 'Parkleys estate only has 18 max'
      }
    },
    image: { type: String },
    issues: [{ type: mongoose.Types.ObjectId, ref: 'issues' }]
  },
  {
    timestamps: true,
    collection: 'locations'
  }
)

const Location = mongoose.model('locations', locationSchema, 'locations')
module.exports = { Location, courts }

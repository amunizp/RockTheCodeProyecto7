const { default: mongoose } = require('mongoose')
const { Location } = require('../api/models/location')
const { locations } = require('../data/locations')

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    const allLocations = await Location.findOne() //solo tengo que encontrar una para borrar

    if (allLocations.length) {
      await Location.collection.drop()
    } else {
      console.log('nothing to delete')
    }
  })
  .catch((err) => console.log(`Something went wrong delteing data: ${err}`))
  .then(async () => {
    await Location.insertMany(locations)
    console.log('I insterted many')
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect)

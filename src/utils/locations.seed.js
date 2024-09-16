require('dotenv').config()
const { default: mongoose } = require('mongoose')
const { Location } = require('../api/models/location')
const { locations } = require('../data/locations')

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    const anyLocations = await Location.findOne() //solo tengo que encontrar una para borrar
    console.log(anyLocations)
    if (anyLocations) {
      await Location.collection.drop()
    } else {
      console.log('nothing to delete')
    }
  })
  .catch((err) => {
    console.log(`Something went wrong delteing data: ${err}`)
    //this stays hanging in case of an error. I wish for it to just disconnect.
    //process.exit(1) //source: https://github.com/Automattic/mongoose/issues/4135
    //mongoose.disconnect // this does not seem to work.
  })
  .then(async () => {
    await Location.insertMany(locations)
    console.log('I inserted many')
  })
  .catch((err) => {
    console.log(`Error creating data: ${err}`)
  })
  .finally(() => mongoose.disconnect) // no parece que se desconecte

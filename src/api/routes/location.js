const {
  getLocations,
  getLocationsByCourt,
  putLocations,
  postLocations,
  deleteLocations,
  getLocationByID
} = require('../controllers/location')

const locationsRouter = require('express').Router()

putLocations
postLocations
deleteLocations
locationsRouter.get('/court/:court', getLocationsByCourt) //no funciona
locationsRouter.get('/:id', getLocationByID)
locationsRouter.get('/', getLocations)
locationsRouter.put('/:id', putLocations)
locationsRouter.post('/', postLocations)
locationsRouter.delete('/:id', deleteLocations)

module.exports = locationsRouter

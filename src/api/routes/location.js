const {
  getLocations,
  getLocationsByCourt,
  putLocations,
  postLocations,
  deleteLocations
} = require('../controllers/location')

const locationsRouter = require('express').Router()

putLocations
postLocations
deleteLocations
locationsRouter.get('/court/:Court', getLocationsByCourt)
locationsRouter.get('/', getLocations)
locationsRouter.put('/:id', putLocations)
locationsRouter.post('/', postLocations)
locationsRouter.delete('/:id', deleteLocations)

module.exports = locationsRouter

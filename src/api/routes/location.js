const { isAuth, isReporter } = require('../../middlewares/auth')
const {
  getLocations,
  getLocationsByCourt,
  putLocations,
  postLocations,
  deleteLocations,
  getLocationByID
} = require('../controllers/location')

const locationsRouter = require('express').Router()

locationsRouter.get('/court/:court', [isReporter], getLocationsByCourt)
locationsRouter.get('/:id', [isReporter], getLocationByID)
locationsRouter.get('/', [isReporter], getLocations)
locationsRouter.put('/:id', [isAuth], putLocations)
locationsRouter.post('/', [isReporter], postLocations)
locationsRouter.delete('/:id', [isAuth], deleteLocations)

module.exports = locationsRouter

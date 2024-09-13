const { Location } = require('../models/location')
async function getLocations(req, res, next) {
  try {
    console.log(Location)

    const locations = await Location.find()

    return res.status(200).json(locations)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error getting locations', error: error.message })
  }
}
const getLocationByID = async (req, res, next) => {
  try {
    const { id } = req.params
    const location = await Location.findById(id)
    return res.status(200).json(location)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error getting location by Id', error: error.message })
  }
}

const getLocationsByCourt = async (req, res, next) => {
  try {
    const { court } = req.params
    const locations = await Location.find({ court: court }).populate('issues')
    return res.status(200).json(locations)
  } catch (error) {
    return res.status(400).json({
      message: 'Error getting locations by court',
      error: error.message
    })
  }
}
const postLocations = async (req, res, next) => {
  try {
    const newLocation = new Location(req.body)
    const locationSaved = await newLocation.save()
    return res.status(201).json(locationSaved)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'error posting location', error: error.message })
  }
}
const putLocations = async (req, res, next) => {
  try {
    const { id } = req.params
    const newLocation = new Location(req.body)
    newLocation._id = id
    const locationUpdated = await Location.findByIdAndUpdate(id, newLocation, {
      new: true
    })
    return res.status(200).json(locationUpdated)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'error updating location', error: error.message })
  }
}
const deleteLocations = async (req, res, next) => {
  try {
    const { id } = req.params
    const locationDeleted = await Location.findByIdAndDelete(id)
    return res.status(202).json(locationDeleted)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'error deleting location', error: error.message })
  }
}
module.exports = {
  getLocations,
  getLocationsByCourt,
  getLocationByID,
  putLocations,
  postLocations,
  deleteLocations
}

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
const getLocationsByCourt = async (req, res, next) => {
  try {
  } catch (error) {}
}
const postLocations = async (req, res, next) => {
  try {
  } catch (error) {}
}
const putLocations = async (req, res, next) => {
  try {
  } catch (error) {}
}
const deleteLocations = async (req, res, next) => {
  try {
  } catch (error) {}
}
module.exports = {
  getLocations,
  getLocationsByCourt,
  putLocations,
  postLocations,
  deleteLocations
}

const { Reporter } = require('../models/reporter')
const { generateSignature } = require('../../config/jwt')
const bcrypt = require('bcrypt')
const loginReporter = async (req, res, next) => {
  try {
    const reporter = await Reporter.findOne({
      reporterName: req.body.reporterName
    })

    if (reporter) {
      if (bcrypt.compareSync(req.body.password, reporter.password)) {
        //JSON web token
        const token = generateSignature(reporter._id)

        return res.status(200).json({ reporter, token })
      } else {
        return res.status(400).json('Name or password are wrong')
      }
    } else {
      return res.status(400).json('Name or password are wrong')
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'error during login of reporter', error: error.message })
  }
}

async function getReporters(req, res, next) {
  try {
    const reporters = await Reporter.find()

    return res.status(200).json(reporters)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error getting reporters', error: error.message })
  }
}
const getReporterByID = async (req, res, next) => {
  try {
    const { id } = req.params
    const reporter = await Reporter.findById(id)
    return res.status(200).json(reporter)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error getting reporter by Id', error: error.message })
  }
}

const registerReporters = async (req, res, next) => {
  try {
    const newReporter = new Reporter({
      reporterName: req.body.reporterName,
      publicContact: req.body.publicContact,
      password: req.body.password
    })
    const reporterDuplicated = await Reporter.findOne({
      reporterName: req.body.reporterName
    })

    if (reporterDuplicated) {
      return res.status(400).json('That name exists try a different name')
    }
    const reporterSaved = await newReporter.save()
    return res.status(201).json(reporterSaved)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'error posting reporter', error: error.message })
  }
}

const putReporters = async (req, res, next) => {
  try {
    const { id } = req.params
    const newReporter = new Reporter(req.body)
    newReporter._id = id
    const reporterUpdated = await Reporter.findByIdAndUpdate(id, newReporter, {
      new: true
    })
    return res.status(200).json(reporterUpdated)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'error updating reporter', error: error.message })
  }
}
const deleteReporters = async (req, res, next) => {
  try {
    const { id } = req.params
    const reporterDeleted = await Reporter.findByIdAndDelete(id)
    return res
      .status(202)
      .json({ message: 'Reporter deleted', reporterDeleted })
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'error deleting reporter', error: error.message })
  }
}

module.exports = {
  getReporters,
  getReporterByID,
  putReporters,
  registerReporters,
  deleteReporters,
  loginReporter
}

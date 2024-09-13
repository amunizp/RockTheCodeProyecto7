const { Reporter } = require('../api/models/reporter')
const { verifySignature } = require('../config/jwt')

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    if (!token) {
      return res.status(400).json('you are not authorised to do this')
    }

    const parsedToken = token.split(' ').pop()
    const { id } = verifySignature(parsedToken)
    const reporter = await Reporter.findById(id)
    console.log('you are an admin', reporter.admin)
    if (reporter.admin) {
      reporter.password = null //aunque esté con hash mejor no verla.
      req.reporter = reporter

      next()
    } else {
      return res.status(400).json('you are not admin')
    }
  } catch (error) {
    return res.status(400).json(error)
  }
}
const isReporter = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    if (!token) {
      return res.status(400).json('you are not authorised to do this')
    }

    const parsedToken = token.split(' ').pop()
    const { id } = verifySignature(parsedToken)
    const reporter = await Reporter.findById(id)
    console.log('you are an admin', reporter.admin)

    reporter.password = null //aunque esté con hash mejor no verla.
    req.reporter = reporter

    next()
  } catch (error) {
    return res.status(400).json(error)
  }
}
module.exports = { isAuth, isReporter }

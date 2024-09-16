const { Reporter } = require('../api/models/reporter')
const { verifySignature } = require('../config/jwt')
const areYouYou = false

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

const isSelf = async (req, res, next) => {
  try {
    console.log('checking if you are deleting yourself')
    isReporter
    console.log(isReporter)
    console.log(isAuth)
    console.log(
      'looks like you are a reporter, now lets check if you are deleting yourself'
    )
    const token = req.headers.authorization
    const parsedToken = token.split(' ').pop()
    const { id, admin } = verifySignature(parsedToken)
    console.log('on the url', req.params.id)
    console.log('from your token', id)
    console.log('are you admin?', admin)

    if (req.params.id === id || admin) {
      console.log('eres el mismo usuario o eres admin')
      next()
    } else {
      return res.status(400).json({
        message:
          'you are not authorised to do this because you can only delete yourself',
        error: error.message
      })
    }
  } catch (error) {
    return res.status(400).json({
      message:
        'you are not authorised to do this because you can only delete yourself',
      error: error.message
    })
  }
}

const authChain = [isSelf, isAuth] //not needed but would be interested in knowing how to make it work simply.
module.exports = { isAuth, isReporter, isSelf, authChain }

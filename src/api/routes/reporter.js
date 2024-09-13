const { isAuth } = require('../../middlewares/auth')
const {
  getReporterByID,
  getReporters,
  putReporters,
  registerReporters,
  deleteReporters,
  loginReporter
} = require('../controllers/reporter')
const reportersRouter = require('express').Router()

reportersRouter.get('/:id', getReporterByID)
reportersRouter.get('/', getReporters)
reportersRouter.put('/:id', putReporters)
reportersRouter.post('/register', registerReporters)
reportersRouter.post('/login', loginReporter)
reportersRouter.delete('/:id', isAuth, deleteReporters)

module.exports = reportersRouter

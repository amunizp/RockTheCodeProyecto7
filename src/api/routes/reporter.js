const { isAuth, isReporter } = require('../../middlewares/auth')
const {
  getReporterByID,
  getReporters,
  putReporters,
  registerReporters,
  deleteReporters,
  loginReporter
} = require('../controllers/reporter')
const reportersRouter = require('express').Router()

reportersRouter.get('/:id', [isAuth], getReporterByID)
reportersRouter.get('/', [isAuth], getReporters)
reportersRouter.put('/:id', [isAuth], putReporters)
reportersRouter.post('/register', registerReporters)
reportersRouter.post('/login', loginReporter)
reportersRouter.delete('/:id', [isAuth], deleteReporters)

module.exports = reportersRouter

const { isAuth, isReporter } = require('../../middlewares/auth')
const {
  getIssueByID,
  getIssues,
  putIssues,
  postIssues,
  deleteIssues,
  getIssueByReporter
} = require('../controllers/issue')
const issuesRouter = require('express').Router()

issuesRouter.get('/:id', [isReporter], getIssueByID)
issuesRouter.get('/user/:user', [isReporter], getIssueByReporter)
issuesRouter.get('/', [isReporter], getIssues)
issuesRouter.put('/:id', [isAuth], putIssues)
issuesRouter.post('/', [isReporter], postIssues)
issuesRouter.delete('/:id', [isAuth], deleteIssues)

module.exports = issuesRouter

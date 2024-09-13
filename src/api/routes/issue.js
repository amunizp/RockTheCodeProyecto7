const {
  getIssueByID,
  getIssues,
  putIssues,
  postIssues,
  deleteIssues,
  getIssueByReporter
} = require('../controllers/issue')
const issuesRouter = require('express').Router()

issuesRouter.get('/:id', getIssueByID)
issuesRouter.get('/user/:user', getIssueByReporter)
issuesRouter.get('/', getIssues)
issuesRouter.put('/:id', putIssues)
issuesRouter.post('/', postIssues)
issuesRouter.delete('/:id', deleteIssues)

module.exports = issuesRouter

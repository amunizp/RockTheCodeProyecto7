const { Issue } = require('../models/issue')
async function getIssues(req, res, next) {
  try {
    console.log(Issue)

    const issues = await Issue.find()

    return res.status(200).json(issues)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error getting issues', error: error.message })
  }
}
const getIssueByID = async (req, res, next) => {
  try {
    const { id } = req.params
    const issue = await Issue.findById(id)
    return res.status(200).json(issue)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error getting issue by Id', error: error.message })
  }
}
//! we will get to this later.
// const getIssuesByCourt = async (req, res, next) => {
//   try {
//     const { court } = req.params
//     const issues = await Issue.find({ court: court })
//     return res.status(200).json(issues)
//   } catch (error) {
//     return res.status(400).json({
//       message: 'Error getting issues by court',
//       error: error.message
//     })
//   }
// }
const postIssues = async (req, res, next) => {
  try {
    const newIssue = new Issue(req.body)
    const issueSaved = await newIssue.save()
    return res.status(201).json(issueSaved)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'error posting issue', error: error.message })
  }
}
const putIssues = async (req, res, next) => {
  try {
    const { id } = req.params
    const newIssue = new Issue(req.body)
    newIssue._id = id
    const issueUpdated = await Issue.findByIdAndUpdate(id, newIssue, {
      new: true
    })
    return res.status(200).json(issueUpdated)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'error updating issue', error: error.message })
  }
}
const deleteIssues = async (req, res, next) => {
  try {
    const { id } = req.params
    const issueDeleted = await Issue.findByIdAndDelete(id)
    return res.status(202).json(issueDeleted)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'error deleting issue', error: error.message })
  }
}
const getIssueByReporter = async (req, res, next) => {
  try {
    const { reporter } = req.params
    const issues = await Issue.find({ user: reporter })
    return res.status(200).json(issues)
  } catch (error) {
    return res.status(400).json({
      message: 'Error getting issues by user',
      error: error.message
    })
  }
}
module.exports = {
  getIssues,
  getIssueByID,
  putIssues,
  postIssues,
  deleteIssues,
  getIssueByReporter
}

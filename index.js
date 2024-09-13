require('dotenv').config()
const express = require('express')
const { connectMongo } = require('./src/config/db')
const locationsRouter = require('./src/api/routes/location')
const issuesRouter = require('./src/api/routes/issue')
const reportersRouter = require('./src/api/routes/reporter')
const app = express()

app.use(express.json())

connectMongo()

app.use('/api/v1/locations', locationsRouter)
app.use('/api/v1/issues', issuesRouter)
app.use('/api/v1/reporters', reportersRouter)
app.use('*', (rew, res, next) => {
  return res.status(404).json('Route not found')
})
port = 3000
app.listen(port, () => {
  console.log(`server connected in http://localhost:${port} 😅  `)
})

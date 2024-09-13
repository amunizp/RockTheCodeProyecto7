const express = require('express')
const { connectMongo } = require('./src/config/db')
const locationsRouter = require('./src/api/routes/location')
const app = express()

app.use(express.json())

connectMongo()

app.use('/api/v1/locations', locationsRouter)
app.use('*', (rew, res, next) => {
  return res.status(404).json('Route not found')
})
port = 3000
app.listen(port, () => {
  console.log(`server connected in http://localhost:${port} 😅  `)
})

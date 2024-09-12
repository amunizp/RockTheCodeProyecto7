require('dotenv').config()
const { default: mongoose } = require('mongoose')
const connectMongo = async () => {
  //?estaría mal usar async redundante?
  //en vez de then catch podria usar try catch
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log('connected with mongoDB')
    })
    .catch((err) => {
      console.log('I could not connect to the mongoDB', err)
    })
}

module.exports = { connectMongo }

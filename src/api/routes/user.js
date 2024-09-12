const { getUsers } = require('../controllers/user')

const routerUser = require('express').Router()
routerUser.get('/users', getUsers)

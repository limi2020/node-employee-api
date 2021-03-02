const express = require('express')
const users = express.Router()

users.get('/', require('./user/user'))

module.exports = users
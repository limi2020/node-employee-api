const express = require('express')
const user = express.Router()

user.post('/login', require('./api/login'))

module.exports = user
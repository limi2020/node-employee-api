const express = require('express')
const login = express.Router()

login.post('/login', require('./api/login'))

module.exports = login
const express = require('express')
const roles = express.Router()

roles.get('/list', require('./api/rolesList'))
roles.post('/add', require('./api/addRoles'))
roles.post('/modify', require('./api/modifyRoles'))
roles.post('/delete', require('./api/deleteRoles'))

module.exports = roles
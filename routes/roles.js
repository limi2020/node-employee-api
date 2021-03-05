const express = require('express')
const roles = express.Router()

roles.get('/list', require('./api/roles/rolesList'))
roles.post('/add', require('./api/roles/addRoles'))
roles.post('/modify', require('./api/roles/modifyRoles'))
roles.post('/delete', require('./api/roles/deleteRoles'))

module.exports = roles
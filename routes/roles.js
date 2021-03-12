const express = require('express')
const roles = express.Router()

roles.post('/list', require('./api/roles/rolesList'))
roles.post('/add', require('./api/roles/addRoles'))
roles.post('/modify', require('./api/roles/modifyRoles'))
roles.post('/delete', require('./api/roles/deleteRoles'))
roles.post('/getRoleById', require('./api/roles/getRoleById'))
roles.get('/role', require('./api/roles/getRoles'))

module.exports = roles
const express = require('express')
const user = express.Router()

user.post('/list', require('./api/user/userList'))
user.post('/add', require('./api/user/addUser'))
user.post('/modify', require('./api/user/modifyUser'))
user.post('/delete', require('./api/user/deleteUser'))
module.exports = user
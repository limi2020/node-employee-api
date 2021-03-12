const express = require('express')
const user = express.Router()

user.post('/list', require('./api/user/userList'))
user.post('/add', require('./api/user/addUser'))
user.post('/modify', require('./api/user/modifyUser'))
user.post('/delete', require('./api/user/deleteUser'))
user.post('/getUserById', require('./api/user/getUserById'))
user.post('/modifyUserRole', require('./api/user/modifyUserRole'))
user.post('/getUserByCondition', require('./api/user/getUserByCondition'))

module.exports = user
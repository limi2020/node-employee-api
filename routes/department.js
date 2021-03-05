const express = require('express')
const department = express.Router()

department.get('/list', require('./api/departmentList'))
department.post('/add', require('./api/addDepartment'))
department.post('/modify', require('./api/modifyDepartment'))
department.post('/delete', require('./api/deleteDepartment'))

module.exports = department
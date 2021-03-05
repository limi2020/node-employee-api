const express = require('express')
const department = express.Router()

department.get('/list', require('./api/department/departmentList'))
department.post('/add', require('./api/department/addDepartment'))
department.post('/modify', require('./api/department/modifyDepartment'))
department.post('/delete', require('./api/department/deleteDepartment'))

module.exports = department
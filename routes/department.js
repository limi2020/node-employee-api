const express = require('express')
const department = express.Router()

department.post('/list', require('./api/department/departmentList'))
department.post('/add', require('./api/department/addDepartment'))
department.post('/modify', require('./api/department/modifyDepartment'))
department.post('/delete', require('./api/department/deleteDepartment'))
department.post('/getDepartmentById', require('./api/department/getDepartmentById'))
department.get('/department', require('./api/department/getDepartments'))

module.exports = department
const express = require('express')
const salary = express.Router()

salary.get('/list', require('./api/salary/salaryList'))
salary.post('/add', require('./api/salary/addSaraly'))
salary.post('/modify', require('./api/salary/modifySalary'))
salary.post('/delete', require('./api/salary/deleteSalary'))

module.exports = salary
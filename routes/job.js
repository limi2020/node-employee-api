const express = require('express')
const job = express.Router()

job.get('/list', require('./api/job/jobList'))
job.post('/add', require('./api/job/addJob'))
job.post('/modify', require('./api/job/modifyJob'))
job.post('/delete', require('./api/job/deleteJob'))

module.exports = job
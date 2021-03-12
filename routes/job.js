const express = require('express')
const job = express.Router()

job.post('/list', require('./api/job/jobList'))
job.post('/add', require('./api/job/addJob'))
job.post('/modify', require('./api/job/modifyJob'))
job.post('/delete', require('./api/job/deleteJob'))
job.post('/getJobById', require('./api/job/getJobById'))
job.get('/job', require('./api/job/getJobs'))

module.exports = job
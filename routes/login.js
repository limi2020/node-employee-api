const express = require('express')
const decodedToken = require('../midleware/decodeToken')
const login = express.Router()

login.post('/login', require('./api/login'))
// login.post('/api/personalInfo', decodedToken, async (req, res) => {
//     const {token} = req.headers
//     const userInfo = 
// })

module.exports = login
const express = require('express')
const app = express()

const users = require('./routes/users')

app.use('/users', users)

app.listen(3000, () => {
    console.log('启动服务器成功');
})
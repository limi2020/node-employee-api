const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// 处理post请求参数
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const test = require('./routes/test')

app.use('/test', test)

app.listen(3000, () => {
    console.log('启动服务器成功');
})
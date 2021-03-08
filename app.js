const express = require('express')
const bodyParser = require('body-parser')

const app = express()
// 处理post请求参数
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 设置跨域请求头
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,Origin,Accept,X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('X-Powered-By', ' 3.2.1');
    // res.header('Content-Type', 'application/json;charset=utf-8');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
})

// 引入测试接口路由模块
const test = require('./routes/test')
const user = require('./routes/user')
const roles = require('./routes/roles')
const department = require('./routes/department')
const job = require('./routes/job')
const salary = require('./routes/salary')

app.use('/test', test)
app.use('/api/user', user)
app.use('/api/roles', roles)
app.use('/api/department', department)
app.use('/api/job', job)
app.use('/api/salary', salary)

app.listen(3000, () => {
    console.log('启动服务器成功');
})
const dbQuery = require('../../../utils/dbConnect')
const dateFormat = require('../../../utils/dataformat')
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
    const { user_id, username, password, sex, phone, email, role_id, job_id, dep_id } = req.body
    const salt = await bcrypt.genSalt(10)
    const pwd = await bcrypt.hash(password, salt)
    console.log(pwd);
    const create_time = new Date()
    const formatTime = dateFormat(create_time)
    const params = [user_id, username, pwd,sex, phone, email, role_id, job_id, dep_id, formatTime]
    const sql = `insert into user(user_id, username, password,sex, phone, email, role_id, job_id, dep_id, create_time) value(?,?,?,?,?,?,?,?,?,?)`
    const result = await dbQuery(sql, params)
    if (result) {
        res.json({
            code: 200,
            message: '添加员工成功'
        })
    } else {
        res.json({
            code: 400,
            message: '添加员工失败'
        })
    }
}
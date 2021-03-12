const dbQuery = require('../../../utils/dbConnect')
const dateFormat = require('../../../utils/dataformat')
const dataformat = require('../../../utils/dataformat')

module.exports = async (req, res) => {
    const { salary_num, month, type, account } = req.body
    const create_time = new Date()
    const formatTime = dataformat(create_time)
    const params = [salary_num, month, type, account, formatTime]
    const sql = `insert into salary(salary_num, month, type, account, create_time) value(?,?,?,?,?)`
    const result = await dbQuery(sql, params)
    if (result) {
        res.json({
            code: 200,
            message: '添加工资成功'
        })
    } else {
        res.json({
            code: 400,
            message: '添加工资失败'
        })
    }
}
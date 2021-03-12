const dbQuery = require('../../../utils/dbConnect')
const dateFormat = require('../../../utils/dataformat')

module.exports = async (req, res) => {
    const { salary_id, salary_num, month, type, account } = req.body
    const update_time = new Date()
    const formatTime = dateFormat(update_time)
    const params = [salary_num, month, type, account, formatTime, salary_id]
    const sql = `update salary set salary_num = ?, month = ?, type = ?, account = ?, update_time = ? where salary_id = ?`
    const result = await dbQuery(sql, params)
    if (result) {
        res.json({
            code: 200,
            message: '更新工资成功'
        })
    } else {
        res.json({
            code: 400,
            message: '更新薪资失败'
        })
    }
}
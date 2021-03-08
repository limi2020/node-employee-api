const dbQuery = require('../../../utils/dbConnect')

module.exports = async (req, res) => {
    const { salary_id, salary_num, month, type, account } = req.body
    const update_time = new Date()
    const params = [salary_num, month, type, account, update_time, salary_id]
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
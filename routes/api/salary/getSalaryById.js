const dbQuery = require('../../../utils/dbConnect')

module.exports = async (req, res) => {
    const {salary_id} = req.body
    const params = [salary_id]
    const sql = `select * from salary where salary_id = ?`
    const result = await dbQuery(sql, params)
    if (result) {
        res.json({
            code: 200,
            message: '获取工资详情成功',
            data: result
        })
    } else {
        res.json({
            code: 400,
            message: '获取工资详情失败'
        })
    }
}
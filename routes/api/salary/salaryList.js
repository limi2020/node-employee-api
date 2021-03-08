const dbQuery = require('../../../utils/dbConnect')

module.exports = async (req, res) => {
    const sql = `select * from salary`
    const params = []
    const result = await dbQuery(sql, params)
    if (result) {
        res.json({
            code: 200,
            message: '获取工资信息成功',
            data: result
        })
    } else {
        res.json({
            code: 400,
            message: '获取工资信息失败'
        })
    }
}
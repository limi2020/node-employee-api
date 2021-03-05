const dbQuery = require('../../../utils/dbConnect')

module.exports = async (req, res) => {
    const sql = `select * from job`
    const params = []
    const result = await dbQuery(sql, params)
    if (result) {
        res.json({
            code: 200,
            message: '获取岗位列表成功',
            data: result
        })
    } else {
        res.json({
            code: 200,
            message: '获取岗位列表失败'
        })
    }
}
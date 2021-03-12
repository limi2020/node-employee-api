const dbQuery = require('../../../utils/dbConnect')

module.exports = async (req, res) => {
    const params = []
    const sql = `select * from job`
    const result = await dbQuery(sql, params)
    if (result) {
        res.json({
            code: 200,
            message: '获取岗位信息成功',
            data: result
        })
    } else {
        res.json({
            code: 400,
            message: '获取岗位信息失败'
        })
    }
}
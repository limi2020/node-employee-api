const dbQuery = require('../../../utils/dbConnect')

module.exports = async (req, res) => {
    const {dep_id} = req.body
    const params = [dep_id]
    const sql = `select * from department where dep_id = ?`
    const result = await dbQuery(sql, params)
    if (result) {
        res.json({
            code: 200,
            message: '获取部门详细信息成功',
            data: result
        })
    } else {
        res.json({
            cocde: 400,
            message: '获取部门详细信息失败'
        })
    }
}
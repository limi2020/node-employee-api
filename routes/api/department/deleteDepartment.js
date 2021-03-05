const dbQuery = require('../../../utils/dbConnect')

module.exports = async (req, res) => {
    const { dep_id } = req.body
    const params = [dep_id]
    const sql = `delete from department where dep_id = ?`
    const result = await dbQuery(sql, params)
    if (result) {
        res.json({
            code: 200,
            message: '删除部门成功'
        })
    } else {
        res.json({
            code: 400,
            message: '删除部门失败'
        })
    }
}
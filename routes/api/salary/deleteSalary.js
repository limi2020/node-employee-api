const dbQuery = require('../../../utils/dbConnect')

module.exports = async (req, res) => {
    const {salary_id} = req.body
    const params = [salary_id]
    const sql = `delete from salary where salary_id = ?`
    const result = await dbQuery(sql, params)
    if (result) {
        res.json({
            code: 200,
            message: '删除薪资成功'
        })
    } else {
        res.json({
            code: 400,
            message: '删除薪资失败'
        })
    }
}
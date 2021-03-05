const dbQuery = require('../../../utils/dbConnect')

module.exports = async (req, res) => {
    const { job_id } = req.body
    const params = [job_id]
    const sql = `delete from job where job_id = ?`
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
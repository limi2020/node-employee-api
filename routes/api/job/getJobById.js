const dbQuery = require('../../../utils/dbConnect')

module.exports = async (req, res) => {
    const {job_id} = req.body
    const params = [job_id]
    const sql = `select * from job where job_id = ?`
    const result = await dbQuery(sql, params)
    if (result) {
        res.json({
            code: 200,
            message: '获取岗位详细信息成功',
            data: result
        })
    } else {
        res.json({
            code: 400,
            message: '获取岗位详细信息失败'
        })
    }
}
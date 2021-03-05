const dbQuery = require('../../../utils/dbConnect')

module.exports = async (req, res) => {
    const { job_id, job_code, job_name } = req.body
    const update_time = new Date()
    const params = [ job_code, job_name, update_time, job_id]
    const sql = `update job set job_code = ?, job_name = ?, update_time = ? where job_id = ?` 
    const result = await dbQuery(sql, params)
    if (result) {
        res.json({
            code: 200,
            message: '更新部门成功'
        })
    } else {
        res.json({
            code: 400,
            message: '更新部门失败'
        })
    }
}
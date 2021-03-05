const dbQuery = require('../../../utils/dbConnect')

module.exports = async (req, res) => {
    const {job_id, job_code, job_name} = req.body
    const create_time = new Date()
    const params = [job_id, job_code, job_name, create_time]
    const sql = `insert into job(job_id, job_code, job_name, create_time) value(?,?,?,?)`
    const result = await dbQuery(sql, params)
    if (result) {
        res.json({
            code: 200,
            message: '添加部门成功'
        })
    } else {
        res.json({
            code: 400,
            message: '添加部门失败'
        })
    }
}
const dbQuery = require('../../../utils/dbConnect')

module.exports = async (req, res) => {
    const {id} = req.body
    const params = [id]
    const sql = `select * from user left join role on user.role_id = role.role_id
    left join job on user.job_id = job.job_id 
    left join department on user.dep_id = department.dep_id  where id = ?`
    const result = await dbQuery(sql, params)
    if (result) {
        res.json({
            code: 200,
            message: '获取具体员工信息成功',
            data: result
        })
    } else {
        res.json({
            code: 400,
            message: '获取具体员工信息失败'
        })
    }
}
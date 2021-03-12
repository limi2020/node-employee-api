const dbQuery = require('../../../utils/dbConnect')

module.exports = async (req, res) => {
    const {condition} = req.body
    const params = [condition, condition, condition]
    const sql = `select * from user left join role on user.role_id = role.role_id
    left join job on user.job_id = job.job_id left join department on user.dep_id = department.deP_id
    where user_id = ? or username = ? or role_name = ?`
    const result = await dbQuery(sql, params)
    if (result) {
        res.json({
            code: 200,
            message: '查询员工成功',
            data: result
        })
    } else {
        res.json({
            code: 400,
            message: '查询员工失败'
        })
    }
}
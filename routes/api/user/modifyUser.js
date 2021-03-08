const dbQuery  = require('../../../utils/dbConnect')

module.exports = async (req, res) => {
    const { id, user_id, username, sex, phone, email, role_id, job_id, dep_id } = req.body
    const upadate_time = new Date()
    const params = [ user_id, username, sex, phone, email, role_id, job_id, dep_id, upadate_time, id]
    const sql = `update user set user_id = ?, username = ?, sex = ?, phone = ?, email = ?, role_id = ?,job_id =?, dep_id = ?, update_time = ? where id = ?`
    const result = await dbQuery(sql, params)
    if (result) {
        res.json({
            code: 200,
            message: '修改员工成功'
        })
    } else {
        res.json({
            code: 400,
            message: '修改员工失败'
        })
    }
}
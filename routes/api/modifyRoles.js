const dbQuery = require('../../utils/dbConnect')

module.exports = async (req, res) => {
    const {role_id, role_code, role_name} = req.body
    const update_time = new Date()
    const params = [role_code, role_name, update_time, role_id]
    const sql = `update role set role_code = ?, role_name = ?, update_time = ? where role_id = ?`
    const result = await dbQuery(sql, params)
    if (result) {
        res.json({
            code: 200,
            message: '更新角色成功'
        })
    } else {
        res.json({
            code: 400,
            message: '更新角色失败'
        })
    }
}
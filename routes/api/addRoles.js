const dbQuery = require('../../utils/dbConnect')

module.exports = async (req, res) => {
    const {role_id, role_code, role_name} = req.body
    const create_time = new Date()
    const params = [role_id, role_code, role_name, create_time]
    const sql = `insert into role(role_id, role_code, role_name, create_time) value(?,?,?,?)`
    const result = await dbQuery(sql, params)
    if (result) {
        res.json({
            code: 200,
            message: '添加角色成功'
        })
    } else {
        res.json({
            code: 400,
            message: '添加角色失败'
        })
    }
}
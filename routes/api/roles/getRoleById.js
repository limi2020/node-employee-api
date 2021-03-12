const dbQuery = require('../../../utils/dbConnect')

module.exports = async (req, res) => {
    const {role_id} = req.body
    const params = [role_id]
    const sql = `select * from role where role_id = ?`
    const result = await dbQuery(sql, params)
    if (result) {
        res.json({
            code: 200,
            message: '获取角色信息成功',
            data: result
        })
    } else {
        res.json({
            code: 400,
            message: '获取角色信息失败'
        })
    }
}
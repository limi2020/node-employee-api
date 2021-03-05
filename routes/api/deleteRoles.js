const dbQuery = require('../../utils/dbConnect')

module.exports = async (req, res) => {
    const {role_id} = req.body
    const params = [role_id]
    const sql = `delete from role where role_id = ?`
    const result = await dbQuery(sql, params)
    if (result) {
        res.json({
            code: 200,
            message: '删除角色成功'
        })
    } else {
        res.json({
            code: 200,
            message: '删除角色失败'
        })
    }
}
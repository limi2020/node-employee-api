const dbQuery = require('../../../utils/dbConnect')

module.exports = async (req, res) => {
    const {id, role_id} = req.body
    const update_time = new Date()
    const params = [ role_id, update_time, id]
    const sql = `update user set role_id = ?, update_time = ? where id = ?`
    const result = await dbQuery(sql, params)
    if (result) {
        res.json({
            code: 200,
            message: '修改用户角色成功'
        })
    } else {
        res.json({
            code: 400,
            message: '修改用户角色失败'
        })
    }
}
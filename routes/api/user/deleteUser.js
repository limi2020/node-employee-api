const dbQuery = require('../../../utils/dbConnect')

module.exports = async (req, res) => {
    const {id} = req.body
    const params = [id]
    const sql = `delete from user where id = ?`
    const result = await dbQuery(sql, params)
    if (result) {
        res.json({
            code: 200,
            message: '删除用户成功'
        })
    } else {
        res.json({
            code: 400,
            message: '删除用户失败'
        })
    }
}
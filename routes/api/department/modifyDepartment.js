const dbQuery = require('../../../utils/dbConnect')
const dateFormat = require('../../../utils/dataformat')

module.exports = async (req, res) => {
    const { dep_id, dep_name, dep_desc } = req.body
    const update_time = new Date()
    const formatTime = dateFormat(update_time)
    const params = [dep_name, dep_desc, formatTime, dep_id]
    const sql = `update department set dep_name = ?, dep_desc = ?, update_time = ? where dep_id = ?`
    const result = await dbQuery(sql, params)
    if (result) {
        res.json({
            code: 200,
            message: '更新部门成功'
        })
    } else {
        res.json({
            code: 400,
            message: '更新部门失败'
        })
    }
}
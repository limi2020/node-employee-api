const dbQuery = require('../../../utils/dbConnect')
const dateFormat = require('../../../utils/dataformat')

module.exports = async (req, res) => {
    const { dep_id, dep_name, dep_desc } = req.body
    const create_time = new Date()
    const formatTime = dateFormat(create_time)
    const params = [ dep_id, dep_name, dep_desc, formatTime]
    console.log(formatTime);
    const sql = `insert into department(dep_id, dep_name, dep_desc, create_time) value(?,?,?,?)`
    const result = await dbQuery(sql, params)
    if (result) {
        res.json({
            code: 200,
            message: '添加部门成功'
        })
    } else {
        res.json({
            code: 400,
            message: '添加部门失败'
        })
    }
}
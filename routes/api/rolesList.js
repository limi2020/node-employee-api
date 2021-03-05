const dbQuery = require('../../utils/dbConnect')
module.exports = async (req, res) => {
    const sql = `select * from role`
    const params = []
    const result = await dbQuery(sql, params)
    // console.log(result);
    if (result) {
        res.json({
            code: 200,
            message: '获取角色列表成功',
            data: result
        })
    } else {
        res.json({
            code: 400,
            message: '获取角色列表失败'
        })
    }
}
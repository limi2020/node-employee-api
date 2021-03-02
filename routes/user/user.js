const query = require('../../utils/dbConnect')

module.exports= async (req, res) => {
    const sql = `select * from user`
    const result =await query(sql)
    if (result) {
        res.json({
            code: 200,
            message: '查询成功',
            data: result
        })
    } else {
        res.json({
            code: 400,
            message: '查询失败'
        })
    }
}
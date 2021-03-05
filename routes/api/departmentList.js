const e = require('express')
const dbQuery = require('../../utils/dbConnect')

module.exports = async (req, res) => {
    const sql = `select * from department`
    const params = []
    const result = await dbQuery(sql, params)
    if (result) {
        res.json({
            code: 200,
            message: '获取部门信息成功',
            data: result
        })
    } else {
        res.json({
            code: 400,
            message: '获取部门信息失败'
        })
    }
}
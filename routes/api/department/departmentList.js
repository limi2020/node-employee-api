const dbQuery = require('../../../utils/dbConnect')

module.exports = async (req, res) => {
    const {pagenum, pagesize} = req.body
    const paramsCount = []
    const countSql = `select count(*) from department`
    const sql = `select * from department limit ?, ?`
    const params = [pagesize * (pagenum - 1), pagesize]
    const total = await dbQuery(countSql, countSql)
    const result = await dbQuery(sql, params)
    const page = {
        pagenum: pagenum,
        paggesize: pagesize,
        total: total[0]['count(*)']
    }
    if (result) {
        res.json({
            code: 200,
            message: '获取部门信息成功',
            page: page,
            data: result
        })
    } else {
        res.json({
            code: 400,
            message: '获取部门信息失败'
        })
    }
}
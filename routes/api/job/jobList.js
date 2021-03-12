const dbQuery = require('../../../utils/dbConnect')

module.exports = async (req, res) => {
    const {pagenum, pagesize} = req.body
    const paramsCount = []
    const countSql = `select count(*) from job`
    const sql = `select * from job limit ?, ?`
    const params = [pagesize * (pagenum - 1), pagesize]
    const total = await dbQuery(countSql, paramsCount)
    const result = await dbQuery(sql, params)
    const page = {
        pagenum: pagenum,
        pagesize: pagesize,
        total: total[0]['count(*)']
    }
    if (result) {
        res.json({
            code: 200,
            message: '获取岗位列表成功',
            page: page,
            data: result
        })
    } else {
        res.json({
            code: 200,
            message: '获取岗位列表失败'
        })
    }
}
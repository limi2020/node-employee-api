const dbQuery = require('../../../utils/dbConnect')

module.exports = async (req, res) => {
    const {pagenum, pagesize } = req.body
    const paramsCount = []
    const params = [pagesize * (pagenum - 1), pagesize]
    console.log(params);
    const countSql = `select count(*) from user`
    const sql = `select id, user.user_id, user.username, user.sex, user.phone, user.email, role_name, job_name, dep_name
    from user left join role on user.role_id = role.role_id left join job on user.job_id = job.job_id
    left join department on user.dep_id = department.dep_id limit ?, ? `
    const result = await dbQuery(sql, params)
    const total = await dbQuery(countSql, paramsCount)
    const page = {
        pagenum: pagenum,
        pagesize: pagesize,
        total: total[0]['count(*)']
    }
    if (result) {
        result.forEach(item => {
            item.sex = item.sex == 0 ? '男' : '女'
        });
        res.json({
            code: 200,
            message: '查询用户列表成功',
            page,
            data: result
        })
    } else {
        res.json({
            code: 400,
            message: '查询用户列表失败'
        })
    }
}
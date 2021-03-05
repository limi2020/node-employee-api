const dbQuery = require('../../utils/dbConnect')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config').get('jwt_config')
module.exports = async (req, res) => {
    const { username, password } = req.body
    const params = [ username ]
    const sql = `select username,password,role_code from user join role on user.role_id = role.role_id where username=?`
    const result = await dbQuery(sql, params)
    if (result) {
        const isValid = await bcrypt.compare(password, result[0].password)
        if (isValid) {
            const tokenContent = {
                username: result[0].username,
                password: result[0].password,
                role_code: result[0].role_code
            }
            const token = jwt.sign(tokenContent, config.secretKey, { expiresIn: config.expiresIn })
            res.json({
                code: 200,
                message: '登录成功',
                data: result,
                token: token
            })
        } else {
            res.json({
                code: 400,
                message: '密码错误'
            })
        }
    } else {
        res.json({
            code: 400,
            message: '用户名不存在'
        })
    }
}
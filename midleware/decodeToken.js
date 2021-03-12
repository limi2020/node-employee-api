const jwt = require('jsonwebtoken')
const config = require('config').get('jwt_config')

module.exports = (req, res, next) => {
    const { token }= req.headers
    if (token) {
        jwt.verify(token, config.secretKey, (err, decoded) => {
            if (err) {
                res.json({
                    code: 400,
                    message: 'token无效'
                })
            } else {
                req.userInfo = decoded
                console.log(req.userInfo)
                next()
            }
        })
    } else {
        res.json({
            code: 403,
            message: 'token不存在'
        })
    }
}
const mysql = require('mysql')
const config = require('config').get("db")

const pool = mysql.createPool({
    host: config.host,
    port: config.port,
    database: config.database,
    user: config.user,
    password: config.password
})

function dbQuery(sql, params) {
    console.log(sql);
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connect) => {
            if (err) {
                reject(err)
                return
            }
            connect.query(sql,params, (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
                connect.release()
            })
        })
    })
}

module.exports = dbQuery
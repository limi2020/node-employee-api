const express = require('express')
const users = express.Router()
const bcrypt = require('bcrypt')
const query = require('../utils/dbConnect')

users.get('/getUser', async (req, res) => {
	const sql = "select * from user"
	const params = []
	const result = await query(sql, params)
	if (result) {
		res.json({
			code: 400,
			message: '查询成功',
			data: result
		})
	} else {
		res.json({
			code: 400,
			message: '查询失败'
		})
	}
})
users.post('/editUser', async (req, res) => {
	const {
		id,
		username
	} = req.body
	const params = [username, id]
	const sql = `update user set username =? where id=?`
	const result = await query(sql, params)
	if (result) {
		res.json({
			code: 200,
			message: '更新用户成功',
			data: result
		})
	} else {
		res.json({
			code: 400,
			message: '更新失败'
		})
	}
})
users.post('/addUser', async (req, res) => {
    const { 
        username, 
        password, 
    } = req.body

    console.log(password);
    if(username && password){
		const salt =await bcrypt.genSalt(10)
		password1 = await bcrypt.hash(password, salt)
		const params = [username,password1]
		const sql = `insert into user(username, password) values(?,?);`
		const result = await query(sql, params);
		if(result){
			res.json({
				code: 200,
				message:"添加成功",
                data: result

			})
		}
	}else{
		res.json({
			code: 400,
			message:"参数错误"
		})
	}
})
users.post('/deleteUser', async (req, res) => {
	const {id} = req.body
	const params = [id]
	const sql = `delete from user where id=?`
	const result = query(sql, params)
	if (result) {
		res.json({
			code: 200,
			message: '删除成功'
		})
	} else {
		res.json({
			code: 400,
			message: '删除失败'
		})
	}
})
module.exports = users
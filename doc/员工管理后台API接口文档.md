### 1.1 API接口说明
- 接口基准地址：http://localhost:3000/api/
- 服务端已开启CORS跨域支持
- 认证统一使用Token认证
- 数据返回格式统一使用JSON

### 1.2 支持的请求方法
- GET：从服务器取出资源
- POST：在服务器中创建资源
- PUT： 在服务器中更新资源
- DELETE: 从服务删除资源

### 1.3 通用状态码
|状态码 |说明|
|--|--|
|200|请求成功|
|201|创建成功|
|204|删除成功|
|400|请求地址不存在或参数错误|
|401|未授权|
|402|禁止访问|
|404|请求资源不存在|
|500|服务器错误|

### 2.登录接口
- 请求路径：login
- 请求方法：post
- 请求参数：

|参数名|参数说明|备注|
|----|-----|----|
|username|用户名|非空|
|password|密码|非空|

- 响应参数：

|参数名|参数说明|备注|
|----|-----|----|
|id|ID||
|username|用户名||
|password|密码||
|role_code|角色编码||

- 响应数据
```js
{
    "code": 200,
    "message": "登录成功",
    "data": [
        {
            "id": 16,
            "username": "limi",
            "password": "$2b$10$HSarZfSRwbnWx0/5l89m1ujTTFzgT37m0kepA.QrBgl5WqotZpyFy",
            "role_code": "admin"
        }
    ],
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsInVzZXJuYW1lIjoibGltaSIsInBhc3N3b3JkIjoiJDJiJDEwJEhTYXJaZlNSd2JuV3gwLzVsODltMXVqVFRGemdUMzdtMGtlcEEuUXJCZ2w1V3FvdFpweUZ5Iiwicm9sZV9jb2RlIjoiYWRtaW4iLCJpYXQiOjE2MTU1NzE2MDksImV4cCI6MTYxNTY1ODAwOX0.TjQ-h8g8lulspuQMwI0xKGzvJFcNCcZ1NjjEF7AtQPo"
}
```
### 3.1 增加用户
- 请求路径：add
- 请求方法：post
- 请求参数：

|参数名|参数说明|备注|
|----|-----|----|
|user_id|工号||
|username|姓名|非空|
|password|密码|非空|
|sex|性别|0代表男，1代表女|
|phone|电话|非空|
|email|邮箱||
|role_id|角色编号||
|job_id|岗位编号||
|dep_id|部门编号||

- 响应数据
```js
{
    "code": 200,
    "message": "添加员工成功"
}
```

### 接口太多了，不写了
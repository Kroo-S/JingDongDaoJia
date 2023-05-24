/**
 * @description user controller // 注册新用户，操作数据存储到数据库中
 */

// 引入model文件夹中的User模型 
const User = require('../model/User')    //不能用import，要用require，common.js规范



/**
 * 1. 注册
 * @param {String} username 用户名
 * @param {String} password 秘密
 * @returns 
 */


// 注册创建用户的函数
async function register(username, password) {

    //创建新用户
    const newUser = User.create({

        //参数重的username、password
        username,
        password
    })
    return newUser  //返回出去

}

//=============================================================
/**
 * 2. 登陆
 * @param {String} username 用户名
 * @param {String} password 秘密
 * @returns 
 */

async function login(username, password) {
    const user = await User.findOne({ username, password })
    if (user != null) {     //不为空登陆成功
        return true
    }
    else return false       //否则登陆失败
}











//导出
module.exports = {
    register,
    login
}
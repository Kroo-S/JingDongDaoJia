/**
 * @description 模拟用户数据操作 
 */


// 用户数据操作，导入User

const User = require('../../model/User')

//匿名函数操作用户数据   ！是固定用法，防止未知错误
!(async()=>{

    // 模拟注册1：创建一个新的用户
    // await User.create({
    //     username:'zhangsan',
    //     password:'123'
    // })

    // 模拟注册2：再创建一个新的用户
    // await User.create({
    //     username:'lisi',
    //     password:'666'
    // })

    // 模拟登陆1：查询单个用户   登陆就是查询的过程
    const zhangsan = await User.findOne({
        username:'zhangsan',
        password:'123'
    })

    console.log('zhangsan',zhangsan)



})()
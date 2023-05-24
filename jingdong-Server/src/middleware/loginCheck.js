// 登陆验证中间件

// 引入res-model规范
const {SuccessModel,ErrorModel} = require('../res-model/index')


module.exports = async (ctx, next) => {
    const session = ctx.session
    if (session && session.userInfo) {
        await next()    //登陆成功
        return
    }
    // ctx.body = {
    //     errno: -1,
    //     message: '登陆验证失败'
    // }


    // ctx.body可以用res-model规范下
    ctx.body = new ErrorModel(10003,'登陆验证失败')
    

}
const router = require('koa-router')()

// 从controller中引入register\login
const { register, login } = require('../controller/user')
// 从res-model中，引入数据请求成功/失败的model模型
const { SuccessModel, ErrorModel } = require('../res-model/index')




//根据接口文档，这里要写成/api/users
router.prefix('/api/user')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })


//  =============================== 注册 ==================================

router.post('/register', async function (ctx, next) {
  const { username, password } = ctx.request.body

  // 注册创建用户
  // 创建数据用try catch
  try {
    const newUser = await register(username, password)

    // ctx.body = {  //ctx.body是ctx.response.body的简写，是返回给前端的数据
    //   errno: 0,
    //   data: newUser
    // }

    // 有了res-model的规范，ctx.body可以进行改写
    // 成功res-model:
    ctx.body = new SuccessModel(newUser)


  } catch (ex) {   //注册失败打印出来
    console.error(ex)
    // ctx.body = {
    //   errno: 10001,
    //   message: `注册失败-${ex.message}`
    // }

    // 失败res-model
    ctx.body = new ErrorModel(10001, `注册失败-${ex.message}`)

  }

})


//  ================================= 登陆 ================================
// 登陆就是查询   在数据库中找是否存在这个用户

router.post('/login', async function (ctx, next) {
  const { username, password } = ctx.request.body

  // 查询单个用户    操作数据在controller中进行
  const res = await login(username, password)
  if (res) {    //res 返回的是true\false   可以直接使用
    
    //登陆成功: 返回值 & session

    ctx.session.userInfo = { username }   //设置session
    //注：这里的userInfo在middleware/loginCheck中引入，
    //因为js是弱类型的语言，ctx.session.userInfo就可以直接生成userInfo这个属性


    // 登陆成功返回respond
    ctx.body = new SuccessModel()


  } else {
    //登陆失败
    ctx.body = new ErrorModel(10002, '登陆失败')     //10001注册失败，10002登陆失败  人为规定

  }

})



module.exports = router

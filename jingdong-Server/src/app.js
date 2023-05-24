const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

//引入session
const session = require('koa-generic-session');

//引入跨域cors
const cors = require('koa2-cors')


const index = require('./routes/index')
const users = require('./routes/users')

//address router
const addressRouter = require('./routes/address')

//引入shopRouter
const shopRouter = require('./routes/shop')

//引入订单路由orderRouter
const orderRouter = require('./routes/order')

// error handler
onerror(app)

//配置跨域cors
app.use(cors({
  origin:'http://localhost:8080', //前端origin地址
  credentials:true  //允许跨域带上cookie
}))

//配置session
app.keys=['*!^@%$(78264hUY&'] //  密钥用于加密,随便写
app.use(session({
  //配置cookie
  cookie:{
    path:'/',  //根目录
    httpOnly:true,
    maxAge:24*60*60*1000
  }
}))


// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

//注册address路由
app.use(addressRouter.routes(),addressRouter.allowedMethods())

// 注册shop路由
app.use(shopRouter.routes(),shopRouter.allowedMethods())

//注册订单路由 order
app.use(orderRouter.routes(),orderRouter.allowedMethods())



// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app

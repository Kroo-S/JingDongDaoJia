/**
 * @description address router
 */

const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('../res-model/index')
// 收货地址要登陆校验，所以要引入loginCheck中间件
const loginCheck = require('../middleware/loginCheck')

//引入controller中createAddress、getAddressList、getAddressById函数
const { createAddress, getAddressList, getAddressById, updateAddress } = require('../controller/address')



router.prefix('/api/user/address')

//1. 创建收货地址
router.post('/', loginCheck, async function (ctx, next) {

    //用户名
    const userInfo = ctx.session.userInfo
    const username = userInfo.username

    const data = ctx.request.body || {}

    //创建数据，在controller中操作数据，这里用try-catch
    try {
        const newAddress = await createAddress(username, data)

        //创建成功，返回请求给到
        ctx.body = new SuccessModel(newAddress)


    } catch (ex) {
        console.error(ex)
        ctx.body = new ErrorModel(10004, `创建地址失败`)

    }

})


//2. 获取收货地址  （get方法）
router.get('/', loginCheck, async function (ctx, next) {

    //用户名
    const userInfo = ctx.session.userInfo
    const username = userInfo.username

    const list = await getAddressList(username)

    ctx.body = new SuccessModel(list)

})



//3. 获取单个收货地址

router.get('/:id',loginCheck,async function(ctx,next){
    const id = ctx.params.id

    const address = await getAddressById(id)
    ctx.body = new SuccessModel(address)

})







//4. 更新收货地址
router.patch('/:id',loginCheck,async function(ctx,next){
    const id = ctx.params.id
    const data = ctx.request.body
    const userInfo = ctx.session.userInfo
    const username = userInfo.username

    //更新数据，操作数据在controller中进行
    const newAddress = await updateAddress(id,username,data)
    ctx.body = new SuccessModel(newAddress)

})




module.exports = router
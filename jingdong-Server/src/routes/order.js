/**
 * @description order router
 */

const router = require('koa-router')()

const { SuccessModel, ErrorModel } = require('../res-model/index')
const loginCheck = require('../middleware/loginCheck')
const createOrder = require('../controller/order')

router.prefix('/api/order')

// 创建订单
router.post('/', loginCheck, async function (ctx, next) {
    // 当前用户名
    const userInfo = ctx.session.userInfo
    const username = userInfo.username

    // 获取订单数据
    const data = ctx.request.body

    //创建订单
    try {
        const newOrder = await createOrder(username, data)
        ctx.body = new SuccessModel(newOrder)
    } catch (ex) {

    }

})

// 获取订单列表(作业) 



module.exports = router
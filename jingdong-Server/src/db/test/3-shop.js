/**
 * @description 模拟商店数据操作 
 */

// 图片接口： /images/shop/sam.jpeg


//从model中引入Shop，然后再compass中生成shop集合
const Shop = require('../../model/Shop')

//匿名函数，模拟数据操作
!(async () => {

    // 1. 创建商店
    // await Shop.create({
    //     name: '沃尔玛',
    //     imgUrl: '/images/shop/wmt.jpeg',
    //     sales: 10000,
    //     expressLimit: 0,
    //     expressPrice: 5,
    //     slogan: 'VIP尊享满89元减4元运费券'
    // })

    // await Shop.create({
    //     name: '山姆会员商店',
    //     imgUrl: '/images/shop/sam.jpeg',
    //     sales: 20000,
    //     expressLimit: 0,
    //     expressPrice: 5,
    //     slogan: '联合利华洗护满10减5'
    // })


    // 2. 查找附近商店
    // const shopList = await Shop.find().sort({_id:1})   //根据id来排序,1正序-1倒序
    // console.log(shopList)

    // 3. 根据id获取单个商店详情
    const id = '636352f7f8e4e01188b84c2b'
    const shop = await Shop.findById(id)

    console.log(shop)



})()
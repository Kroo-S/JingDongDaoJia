/**
 * @description 模拟商品数据操作 
 */

//从model中引入product，在compass中生成product集合
const Product = require('../../model/Product')

!(async()=>{
    // 1. 创建几个商品

    // await Product.create({
    //     shopId: '636352f7f8e4e01188b84c2b', // 沃尔玛
    //     name: '葡萄',
    //     imgUrl: '/images/product/grape.jpg',
    //     sales: 100, // 月售多少
    //     price: 33, // 当前价格
    //     oldPrice: 36, // 原价
    //     tabs: ['all', 'seckill', 'fruit']
    // })
    
    // await Product.create({
    //     shopId: '636352f7f8e4e01188b84c2b', // 沃尔玛
    //     name: '苹果',
    //     imgUrl: '/images/product/apple.jpeg',
    //     sales: 200, // 月售多少
    //     price: 25, // 当前价格
    //     oldPrice: 27, // 原价
    //     tabs: ['all', 'seckill', 'fruit']
    // })

    // await Product.create({
    //     shopId: '636352f7f8e4e01188b84c2b', // 沃尔玛
    //     name: '桃子',
    //     imgUrl: '/images/product/peach.jpg',
    //     sales: 50, // 月售多少
    //     price: 16, // 当前价格
    //     oldPrice: 19, // 原价
    //     tabs: ['all', 'seckill', 'fruit']
    // })

    // await Product.create({
    //     shopId: '636352f7f8e4e01188b84c2e', // 山姆会员店
    //     name: '西瓜',
    //     imgUrl: '/images/product/watermelon.jpg',
    //     sales: 180, // 月售多少
    //     price: 13, // 当前价格
    //     oldPrice: 15, // 原价
    //     tabs: ['all', 'seckill', 'fruit']
    // })


    // 2. 查询某个商店，某个tab的商品列表
    const list = await Product.find({
        shopId:'636352f7f8e4e01188b84c2b',
        tabs:{
            $in:'all'
        }
    })
    console.log(list)



})()
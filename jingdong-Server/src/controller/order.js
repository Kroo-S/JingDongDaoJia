/**
 * @description order controller
 */


 const Order = require('../model/Order')
 const Product = require('../model/Product')
 const Address = require('../model/Address')
 
 /**
  * 创建订单
  * @param {string} username 用户名
  * @param {Object} data 订单数据
  */
 
 async function createOrder(username, data) {
     console.log(username, data)
     // 解构 data（前端传来的订单信息）
     const {
         addressId,
         shopId,
         shopName,
         isCanceled = false,//默认值 false
         products = [] //默认值
     } = data
 
     // 根据 addressId 获取地址信息
     const address = await Address.findById(addressId)
 
     // 获取商品列表
     const pIds = products.map(p => p.id) // 格式如['商品1-id','商品2-id']
     const productList = await Product.find({
         shopId,
         _id: { $in: pIds }
     })
 
     // 拼接上购买数量
     const productListWithSales = productList.map(p => {
         // 商品 id
         const id = p._id.toString()
 
         // 通过商品 id 可以找到销售数量
         const filterProducts = products.filter(item => item.id === id)
         if (filterProducts.length === 0) {
             // 没有找到匹配的数量，报错
             throw new Error('未找到匹配的销量数据')
         }
 
         return {
             product: p,
             orderSales: filterProducts[0].num  // 销量
         }
     })
 
     // 创建订单
     const newOrder = await Order.create({
         username,
         address,
         shopId,
         shopName,
         isCanceled,
         products: productListWithSales
     })
 }
 
 module.exports = {
     createOrder
 }
 
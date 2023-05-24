/**
 * @description 模拟订单数据操作 
 */

// 从model中引入Order模型

const Order = require('../../model/Order')
const Address = require('../../model/Address')
const Product = require('../../model/Product')

!(async () => {

    // 1. 创建订单
    const requestBody = {
        addressId: '6363445a0e119d35feb4ef68',
        shopId: '636352f7f8e4e01188b84c2b',
        shopName: '沃尔玛',
        isCanceled: false,//订单是否被取消
        products: [
            {
                id: '63635814e4a63aaea1ebb1e6',
                num: 3 //购买数量
            },
            {
                id: '63635814e4a63aaea1ebb1e9',
                num: 5 //购买数量
            }
        ]
    }

    // 2. 获取address   findById
    const address = await Address.findById(requestBody.addressId)


    // 3. 获取商品列表
    const pIds = requestBody.products.map(p => p.id)  //['AAA','BBB']变成['AAA的id','BBB的id']
    const productList = await Product.find({
        shopId: requestBody.shopId,  // 沃尔玛的商品
        _id: {
            $in: pIds       // 从pIds中找出来
        }
    })
     // console.log(pIds)    
    // console.log(productList)

    // 4. 整合订单购买数量
    const productListWidthSales = productList.map(p => {
        // 商品 id
        const id = p._id.toString()

        // 找到商品的购买数量
        const filterProducts = requestBody.products.filter(item => item.id === id)
        if (filterProducts.length === 0) {
            // 没有找到匹配的数量，报错
            throw new Error('未找到匹配的销量数据')
        }

        return {
            orderSales: filterProducts[0].num, // 销量
            // product: p,
            product: {
                shopId: p.shopId,
                name: p.name,
                imgUrl: p.imgUrl,
                sales: p.sales,
                price: p.price,
                oldPrice: p.oldPrice
            }
        }
    })
    // console.log(productListWidthSales)



    // 5. 创建订单
    await Order.create({
        username: 'zhangsan',//已添加
        shopId:requestBody.shopId,//已添加
        shopName:requestBody.shopName,//已添加
        isCanceled:requestBody.isCanceled,//已添加
        products:productListWidthSales, 
        // address
        address: {
            username: address.username,
            city: address.city,
            department: address.department,
            houseNumber: address.houseNumber,
            name: address.name,
            phone: address.phone
        },
    })
    console.log(address)


})()
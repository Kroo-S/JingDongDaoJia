/**
 * @description shop controller
 */

const Shop = require('../model/Shop')
const Product = require('../model/Product')

/**
 * 1. 获取商店列表（热门商店） 
 */
async function getHotList() {
    const list = await Shop.find().sort({ _id: -1 }) // 逆序
    return list
}




/**
 * 2. 获取商店信息
 * @param {string} id id
 */
async function getShopInfo(id) {
    const shop = await Shop.findById(id)
    return shop
}



/**
 * 3. 根据商店获取商品
 * @param {string} shopId 商店id
 * @param {string} tab tab分类
 */
 async function getProductsByShopId(id, tab = 'all') {
    const list = await Product.find({
        // shopId,
        // 由于mongooose版本的影响，这里需要按照如下方式书写
        shopId: id,
        
        tabs: {
            $in: tab // 匹配 tabs
        }
    }).sort({ _id: -1 }) // 逆序
    return list
}






module.exports = {
    getHotList,
    getShopInfo,
    getProductsByShopId
}

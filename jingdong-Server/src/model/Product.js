/**
 * @description Product Model
 */

//引入mongoose
const mongoose = require('../db/db')

//定义Schema
const Schema = mongoose.Schema({
    shopId: {
        type: String,
        required: true
    },
    name: String,
    imgUrl: String,
    sales: Number,
    price: Number,
    oldPrice: Number,
    tabs: [String]       //左侧tab的类型  tab:['all','seckill']
}, { timestamps: true })

//用Model规范Product
const Product = mongoose.model('product', Schema)

//导出Product
module.exports = Product
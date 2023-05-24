/**
 * @description Shop Model
 */


// 引入mongoose
const mongoose = require('../db/db')

// 定义Schema
const Schema = mongoose.Schema({
    name: String,
    imgUrl: String,
    sales: Number,
    expressLimit: {
        type: Number,
        default: 0
    },
    expressPrice: Number,
    slogan: String
}, { timestamps: true })

// 从mongoose.Model中定义Shop
const Shop = mongoose.model('shop', Schema)

//导出Shop
module.exports = Shop

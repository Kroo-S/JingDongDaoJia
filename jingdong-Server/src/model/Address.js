/**
 * @description Address Model
 */

//引入mongoose
const mongoose = require('../db/db')

//引入Schema
const Schema = mongoose.Schema({
    username: {
        type: String,
        required: true   //必需
    },
    city: String,
    department: String,
    houseNumber: String,
    name: String,
    phone: String
}, { timestamps: true })

//mongoose.Model模型定义Schema给Address
const Address = mongoose.model('address', Schema)

//导出Address
module.exports = Address


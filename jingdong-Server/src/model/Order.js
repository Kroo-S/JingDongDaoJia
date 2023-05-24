/**
 * @description Product Model
 */


//引入mongoose
const mongoose = require('../db/db')

//Schema规范
const Schema = mongoose.Schema({
    username: {
        type: String,
        required: true   //必需
    },
    shopId: String,
    shopName: String,

    isCanceled: {
        type: Boolean,
        default: false
    },

    address: {
        username: String,
        city: String,
        department: String,
        houseNumber: String,
        name: String,
        phone: String
    },
    products: [       //每一项是个对象
        {
            product: {
                shopId: {
                    type: String,
                    required: true
                },
                name: String,
                imgUrl: String,
                sales: Number,
                price: Number,
                oldPrice: Number,
                tabs: [String]
            },
            orderSales: Number
        },
        {

        }
    ]

}, { timestamps: true })

//用mongoose.model将 Schema规范  赋予Order模型  并命名为order,在compass中显示为‘orders’
const Order = mongoose.model('order', Schema)

//导出Order
module.exports = Order
/**
 * @description User Model
 */

const mongoose = require('../db/db')

const Schema = mongoose.Schema({
    username:{
        type:String,
        required:true,   //必需
        unique:true,    //唯一，不可重复
    },
    password:String
},{timestamps:true})

const User = mongoose.model('user',Schema)

module.exports = User
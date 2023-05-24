/**
 * @description address controller
 */

// 获取Address的数据模型
const Address = require('../model/Address')


/**
 * 1. 创建地址
 * @param {String} username 用户名
 * @param {Object} data 地址的详细信息
 * @returns 
 */

async function createAddress(username, data) {
    const address = await Address.create({
        username,
        ...data     //展开运算符
    })
    return address  //函数要return
}


/**
 * 2. 获取地址列表
 * @param {String} username 用户名
 * @returns 
 */

async function getAddressList(username) {
    const list = await Address.find({ username }).sort({ updatedAt: -1 })
    return list
}


/**
 * 3. 获取单个收货地址，根据id
 * @param {String} id id
 * @returns 
 */

async function getAddressById(id) {
    const address = await Address.findById(id)
    return address
}


/**
 * 4. 更新收货地址
 * @param {String} id id
 * @param {String} username 用户名
 * @param {object} data 地址的详细信息
 */
async function updateAddress(id, username, data) {
    const address = await Address.findOneAndUpdate(
        { _id: id, username },      //查询条件
        { username, ...data },     //要更新的数据
        { new: true }
    )
    return address
}


//导出
module.exports = {
    createAddress,
    getAddressList,
    getAddressById,
    updateAddress
}

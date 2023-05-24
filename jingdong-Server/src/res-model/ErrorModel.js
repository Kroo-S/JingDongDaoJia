/**
 * @description 错误返回的数据模型   ctx.respond.body中的格式都一样，这里统一一下
 */

class ErrorModel {
    constructor(errno = -1, message = 'error') {
        this.errno = errno
        this.message = message
    }
}

module.exports = ErrorModel


// new ErrorModel(10001,'注册失败')     //{errno:10001,message:'注册失败'}
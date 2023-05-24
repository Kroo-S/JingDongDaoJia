/**
 * @description 成功返回的数据模型   ctx.respond.body中的格式都一样，这里统一一下
 */

class SuccessModel{
    constructor(data){
        this.errno=0    //成功返回的标志
        if(data!=null){
            this.data=data
        }
    }
}

//导出
module.exports = SuccessModel

//new SuccessModel()          //{errno:0}
//new SuccessModel({...})     //{errno:0,data:{...}}
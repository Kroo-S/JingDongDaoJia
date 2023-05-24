/**
 * @description 模拟地址数据操作 
 */


// 引入address
//从model中引入Address，在compass中生成‘address’的集合
const Address = require('../../model/Address')

//匿名函数，创建收获地址
!(async () => {
    //1. 创建收获地址用create
    // await Address.create({
    //     username:'zhangsan',
    //     city:'北京市',
    //     department:'',
    //     houseNumber:'',
    //     name:'张三',
    //     phone:'1866666666'
    // })

    // 2. 创建新的用户地址
    // await Address.create({
    //     username:'zhangsan',
    //     city:'北京市',
    //     department:'XXXX',
    //     houseNumber:'',
    //     name:'张三',
    //     phone:'1189999999'
    // })

    // 3. 获取收货地址列表（zhangsan）  updatedAt按照更新的时间排序（逆序）
    // const addressList = await Address.find({username:'zhangsan'}).sort({updatedAt:-1})
    // console.log(addressList)


    // 4. 根据id获取单个收货地址
    // const id = '6363445a0e119d35feb4ef68'
    // const address = await Address.findById(id)
    // console.log(address)

    // 5. 更新收货地址

    const id = '6363445a0e119d35feb4ef68'

    const newData = {
        username:'zhangsan',
        city:'北京市',
        department:'慕课网',
        houseNumber:'门牌号2A',
        name:'张三A',
        phone:'1888888888'
    }
    const address = await Address.findOneAndUpdate(
        {
            _id: id, username: 'zhangsan'  //更新的条件
        },
        newData,    //更新的内容
        {
            new: true    //返回更新之后的最新数据（默认false，返回更新之前的）
        }
    )
    console.log(address)

})()
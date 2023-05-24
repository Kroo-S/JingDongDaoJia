// 连接数据库

const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017'     //本地默认的mongodb服务地址
const dbName = 'testdb'     //compass创建数据库的名称

//配置      新版本的mongodb不用配置这两个了
// mongoose.set('useCreateIndex',true)
// mongoose.set('useFindAndModify',false)

//开始连接
mongoose.connect(`${url}/${dbName}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//连接对象
const db = mongoose.connection

//连接失败
db.on('error',err=>{
    console.error('mongoose connect error',err)
})

//连接成功
db.once('open',()=>{
    console.log('mongoose连接成功')
})

//导出
module.exports = mongoose

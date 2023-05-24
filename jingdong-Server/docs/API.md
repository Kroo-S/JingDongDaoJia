# API（接口）设计

## 注册

### url   

`/api/user/register`

### method

`post`

### request body

```js
{
  username: '18633334444',
  password : '123abc'  
}
```

### response body

```js
{
  errno: 0,
  message: 'errnp !== 0 的话,的错误信息' 
}
```

## 登录

### url   

`/api/user/login`

### method

`post`

### request body

```js
{ 
  username: '18633334444',
  password : '123abc'  
}
```

### response body

```js
{
  errno: 0,
  message: 'errnp !== 0 的话,的错误信息' 
}
```


## 创建收货地址

### url   

`/api/user/address`

### method

`post`

### request body

```js
{
    city:'北京',
    department:'xx小区',
    houseNumber:'门牌号',
    name:'张三',
    phone:'18677778888'
}
```

### response body

```js
{
    errno:0,
    data:{
        _id:'收货地址的 id',
        city:'北京',
        department:'xx小区',
        houseNumber:'门牌号',
        name:'张三',
        phone:'18677778888',
        createAt:'Date',
        updateAt:'Date'
    },
    message:'errno !== 0 错误信息'
}
```

## 获取收货地址列表

`/api/user/address`

### url

`get`

### method

### request body

无

### response body

```js
{
    errno:0,
    data:[
        {
            _id:'收货地址的 id',
            city:'北京',
            department:'xx小区',
            houseNumber:'门牌号',
            name:'张三',
            phone:'18677778888'
        }
    ]
    message:'errno !== 0 错误信息'  
}
```

## 获取单个收货地址

### url

`/api/user/address/:id` (`:id`是一个动态参数，服务端可获取具体的参数值)

示例：

`/api/user/address/100`

`/api/user/address/101`

### method

`get`

### request body

无

### response body

```js
{
    errno:0,
    data:{
            _id:'收货地址的 id',
            city:'北京',
            department:'xx小区',
            houseNumber:'门牌号',
            name:'张三',
            phone:'18677778888'
    },
    message:'errno !== 0 错误信息' 

}
```

## 更新收货地址

### url

`/api/user/address/:id`

### method

`patch`

### request body

```js
{
    city:'北京',
    department:'xx小区',
    houseNumber:'门牌号',
    name:'张三',
    phone:'18677778888'
}
```

### response body

```js
{
    errno:0,
    message:'errno !== 0 错误信息'
}
```

## 附近（热门）商店

### url

`/api/shop/hot-list`

### method

`get`

### request body

无

### response body

```js
{
    errno:0,
    data:[
        {
           _id:'店铺 id',
           name:'沃尔玛',
           imgUrl:'商店的图片 url',
           sales:10000,//月售
           expressLimit:0,//起送价格
           expressPrice:5,//快递价格
           slogan:'VIP 尊享满 89 元减 4 元运费券'
        }
    ]
    message:'errno !== 0 时错误信息'
}
```

## 商店详情

### url

`/api/shop/:id`

### method

`get`

### request body

无

### response body

```js
{
    errno:0,
    data:{
        _id:'店铺 id',
        name:'沃尔玛',
        imgUrl:'商店的图片 url',
        sales:10000,//月售
        expressLimit:0,//起送价格
        expressPrice:5,//快递价格
        slogan:'VIP 尊享满 89 元减 4 元运费券'
    },
    message:'errno !== 0 时错误信息'
}
```

## 查询（某个）商店的商品列表

### url

`/api/shop/:id/products`

### query

`tab=全部商品`

举例：

`/api/shop/10/products?tab=全部商品`
 
`/api/shop/10/products?tab=秒杀`


### method

`get`

### request body

无

### response body

```js
{
    errno:0,
    data:[
        {
            _id:'商品 id',
            name:'番茄 250g/份',
            imgUrl:'xxx.png',
            sales:10,//月售
            price:33.6,
            oldprice:40.6
        }
    ]
    message:'errno !== 0 时错误信息'
}
```


## 创建订单

### url

`/api/order`

### method

`post`

### request body

```js
{
    addressId:'收货地址 id',
    shopId:'商店的 id',
    shopName:'沃尔玛',
    isCanceled:false,//订单是否被取消
    products:[
        {
            id:'商品1 id',
            num:3 //购买数量
        },
        {
            id:'商品2 id',
            num:5 //购买数量
        }
    ]
}
```

### response body

```js
{
    errno:0,
    data:{
        _id:'订单 id',
    },
    message:'errno !== 0 时错误信息'
}
```

<!-- 

## 标题

### url

### method

### request body

```js
{
}
```

### response body

```js
{
}
```

-->
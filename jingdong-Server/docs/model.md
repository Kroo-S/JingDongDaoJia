# 数据模型设计

列举各个数据模型的示例，写明属性

## 用户

```js
{
    _id:'xxx',
    username:'18677778888',
    password:'123'
}
```

## 地址

```js
{
    _id:'xxx',
    username:'18677778888',//就和用户产生关联
    city:'北京',
    department:'xxx小区',
    houseNumber:'门牌号',
    name:'张三',
    phone:'18655566666'
}
```

## 商店

```js
{
    _id:'xxxxx',
    name:'沃尔玛',
    imgUrl:'xxx.png',
    sales:10000,
    expressLimt:0,
    expressPrice:5,
    slogan:'红色的宣传标语'
}
```

## 商品

```js
{
    _id:'xxx',
    shopId:'xxxxx' //对应商店的_id
    name:'番茄',
    imgUrl:'xxx.png',
    sales:10,
    price:33.6,
    oldPrice:40.6,
    tabs:['all','seckill'] //左侧 tab 类型
}
```

## 订单

```js
{
    _id:'xxx',

    username:'zhangsan',
   
    shopId:'商店的id',
    shopName:'沃尔玛',

    isCanceled:false,//订单是否被取消

    address:{
        "username": "zhangsan",
        "city": "北京",
        "department": "yyy小区A",
        "houseNumber": "门牌号2A",
        "name": "张三A",
        "phone": "18632451111",
    },

    products:[
        {
            product:{
                {
                    "tabs": ["all", "seckill", "fruit"],
                    "shopId": "6162b97e226bf13191c1207f",
                    "name": "葡萄",
                    "imgUrl": "/images/product/grape.jpg",
                    "sales": 100,
                    "price": 33,
                    "oldPrice": 36,
                },
                orderSales:3
            }
        }
    ]
}
```
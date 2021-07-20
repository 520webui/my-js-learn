//遍历
let arr = ['我','和','我的','祖国']
arr.forEach((item,index,self)=>{
    console.log(item,index,self);
})
//映射
let arr1=[11,34,56]
let arr2=arr1.map((item,index,self)=>{
    console.log(item,index,self);
    return item*2;
})
console.log(arr2);
//过滤
let arr3=[11,22,33,34,50,20]
let arr4=arr3.filter((item)=>{
    return item>30;
})
console.log(arr4);
//累加
let arr5=[1,2,3,4,5]
let ret=arr5.reduce((a,b)=>{
    return a+b;
},6)
console.log(ret);
//每一个
let arr6=[13,14,1,5,12,23,34,25,17]
let ret6=arr6.every(item=>{
    return item>=1;
})
console.log(ret6);

//有一个
let arr7=[13,14,1,5,12,23,34,25,17]
let ret7=arr7.some(item=>{
    return item>12
})
console.log(ret7);

//JS中的Map对象
//1，js创建map对象
var map = new Map();
//2.将键值对放入map对象
map.set("key","value")
map.set("key1","value1")
map.set("key2","value2")
//3.根据key获取map值
map.get("key")
//4.删除map指定对象
delete map["key"]
//或
map.delete("key")
//5.循环遍历map
map.forEach(function(key){
    console.log("key",key)  //输出的是map中的value值
})
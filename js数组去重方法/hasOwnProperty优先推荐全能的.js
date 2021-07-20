/*function unique(arr) {
    let obj ={};
    return arr.filter(function (item,index,arr) {
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item]=true)
    })
}
let arr = [1,1,1,1,3,3,4,5,5,6,'我们','我们',null,null,undefined,undefined,NaN,NaN,{id:1,num:4},{id:1,num:3},{id:2,num:4}];
console.log(unique(arr))*/


function unique(arr) {
    let obj ={};
    return arr.filter(function (item,index,arr) {
        return obj.hasOwnProperty(typeof item.num + item.num) ? false : (obj[typeof item.num + item.num]=true)
    })
}
let arr = [{id:1,num:4},{id:1,num:3},{id:2,num:4}];
console.log(unique(arr))
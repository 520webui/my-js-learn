function unique(arr) {
        return arr.filter(function (item,index,arr) {
            //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
            return arr.indexOf(item,0)===index;
        });
}
let arr = [1,1,1,1,3,3,4,5,5,6,'我们','我们',null,null,undefined,undefined,NaN,NaN,{},{}];
console.log(unique(arr))

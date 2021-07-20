function arrayNonRepeatfy(arr) {
    let map = new Map();
    let array =new Array();//数组用于返回结果
    for (let i = 0; i < arr.length; i++) {
        if(map.has(arr[i])){
            map.set(arr[i],true);
        }else {
            map.set(arr[i],false);//如果没有该key值
            array.push(arr[i]);
        }
    }
    return array;
}
let arr = [1,1,1,1,3,3,4,5,5,6,'我们','我们',null,null,undefined,undefined,NaN,NaN,{},{}];
console.log(arrayNonRepeatfy(arr))
function unique(arr) {
    return Array.from(new Set(arr));
}
let arr = [1,1,1,1,3,4,5,6,'我们','我们',null,null,undefined,undefined,NaN,NaN,{},{}];
console.log(unique(arr))
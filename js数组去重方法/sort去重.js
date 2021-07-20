function unique(arr) {
    if(!Array.isArray(arr)){
        console.log('type error');
        return;
    }
    arr =arr.sort();
    let arry=[arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i]!==arr[i-1]) arry.push(arr[i]);
    }
    return arry;
}
let arr = [1,1,1,1,3,3,4,5,5,6,'我们','我们',null,null,undefined,undefined,NaN,NaN,{},{}];
console.log(unique(arr))

/*
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return;
    }
    arr = arr.sort()
    var arrry = [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            arrry.push(arr[i]);
        }
    }
    return arrry;
}
var arr = [1, 1, 15, 15, false, undefined, null, null, NaN, NaN, {}, {}];
console.log(unique(arr))*/

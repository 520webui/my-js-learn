function unique(arr) {
    if(!Array.isArray(arr)){
        console.log('type error');
        return;
    }
    let array=[];
    for (let i = 0; i < arr.length; i++) {
        if(!array.includes(arr[i])){
            array.push(arr[i]);
        }
    }
    return array;
}
let arr = [1,1,1,1,3,3,4,5,5,6,'我们','我们',null,null,undefined,undefined,NaN,NaN,{},{}];
console.log(unique(arr))
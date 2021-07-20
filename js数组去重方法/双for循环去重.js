function unique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j,1);
                j--;
            }
        }
    }
    return arr;
}

let arr = [1,1,1,1,3,4,5,6,'我们','我们',null,null,undefined,undefined,NaN,NaN,{},{}];
console.log(unique(arr))

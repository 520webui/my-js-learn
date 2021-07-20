function unique(arr) {
    let array =arr;
    let len =array.length;
     array.sort(function (a,b) {
        //排序后更加方便去重
         return a-b;
     })
    function loop(index) {
        if(index>=1){
            if(array[index]===array[index - 1]){
                array.splice(index,1)
            }
            loop(index-1);
        }
    }
    loop(len -1);
     return array;
}
let arr = [1,1,1,1,3,3,4,5,5,6,'我们','我们',null,null,undefined,undefined,NaN,NaN,{},{}];
console.log(unique(arr))
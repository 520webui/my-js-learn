//from
let datas = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
}
datas = Array.from(datas, (item, index) => {
    console.log(item, index, this);//a 0 {} b 1 {} c 2 {}
    return item.toUpperCase();
})
console.log(datas);//[ 'A', 'B', 'C' ]

//isArray
let lists = ['1', 'a', 2, '55', {q: 10}]
console.log(Array.isArray(lists));//true


// of
let arr = Array.of(1, 2, 3, 4, 5, 6);
console.log(arr);//[ 1, 2, 3, 4, 5, 6 ]

//find  只要找到就返回对应的结果
let arr2=[1,3,4,6,2];
let val=arr2.find(item=>{
    return item>3;
})
console.log(val);//4

//findIndex 找数组对应的索引
let arr3=[1,2,5,8];
let index=arr3.findIndex(item=>{
    return item>5;
})
console.log(index);//3

//数组扁平化 flat(Infinity)
let arr4=[
    [1,2],
    [3,4],
    [
        [6,7],
        [
            [8],
            [9,10]
        ]
    ]
];
console.log(arr4.flat(Infinity));//[1, 2, 3, 4, 6,7, 8, 9, 10]

let arr5=[
    [1,2],
    [3,4],
    [6,8]
];

//数组扁平化 flatMap
let arr6=arr5.flatMap(item=>{
    item=item.filter(item=>item>=2);
    return item;
});
console.log(arr6);//[ 2, 3, 4, 6, 8 ]

//includes 包含
let arr7=['a','b','c','d'];
console.log(arr7.includes("a", -3));//false
console.log(arr7.includes("a"));//true

/**
 * Array arr.fill(value[,start[,end]]);用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引
 * 参数：
 *      用来填充数组元素的值
 * 可用参数：
 *      start
 *          起始索引，默认值为0.
 *      end
 *         终止索引，默认值为 arr.length
 */
let arr8=['a','b','c','d','e'];
arr8.fill("f",1,3)
console.log(arr8);//[ 'a', 'f', 'f', 'd', 'e' ]




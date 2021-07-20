let obj={
    a:1,
    b:2,
    c:3
};
//交互对象的a,c两个对象
// let a=obj.a;
// let c=obj.c;
// obj.a=c;
// obj.c=a;

//对象的解构赋值
let {a,c}=obj
console.log(a,c);

//let {a}=obj  等价于  let a=obj.a;

let {b}=obj;
console.log(b);


/*
* 对象解构：变量名 和 熟悉名 要对应
* 数组解构: 变量名 和 值索引对应
* */

let aa=11;
let bb=22;
let arr=[aa,bb];
[bb,aa]=arr;
console.log(aa,bb);//22 11

let str ='ABCD'
let [aaa,bbb]=str;
console.log('ABCD',aaa,bbb);

//展开运算符
let arr2 = [1,2,3,4,5];
let arr3 = ["aaaa",...arr2,'bbbb','cccc'];
//把arr中的数据放入 arr2 中，从第一位开始排列
//[ 'aaaa', 1, 2,3,4,5,'bbbb','cccc']
console.log(arr3);

//剩余参数
let arr4=[11,22,33,44,55];
let [a1,...b1]=arr4;
console.log(a1,b1);// 11 [ 22, 33, 44, 55 ]

//对象的展开运算符
let obj2 ={
    a2:1,
    b2:2,
};
let obj3 ={
    ...obj2,
    c2:11,
    d2:22,
}

console.log(obj3);//{ a2: 1, b2: 2, c2: 11, d2: 22 }

//剩余参数
let {a2,...d2}=obj3

console.log(a2,d2);//1 { b2: 2, c2: 11, d2: 22 }

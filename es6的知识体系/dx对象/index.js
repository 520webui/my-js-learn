//对象
let a = 11;
let b = 22;
let obj={
    a,//等价于 a:a
    b,//等价于 b:b
    c(){
        console.log(123);
    }
}
obj.c();//123
console.log(obj.a);//11
console.log(obj.b);//22
console.log(obj);//{ a: 11, b: 22, c: [Function: c] }

//对象合并
let obj1={
    a:1,
    b:2
};
let obj2={
    c:3,
    d:4
};
let f=null;
let f1=false;
let obj3=Object.assign(obj1,obj2,{f},{f1},{},{aa:22});
console.log(obj3,obj2,obj1);//{ a: 1, b: 2, c: 3, d: 4, f: null, f1: false, aa: 22 } { c: 3, d: 4 } { a: 1, b: 2, c: 3, d: 4, f: null, f1: false, aa: 22 }


//对象比较
let nub=NaN;
let str=NaN;
let str1=1;

console.log(Object.is(nub, str));//true
console.log(Object.is(nub, str1));//false


//属性表达式
let n ="name";
let age ="theAge";
let obj4={
    [n]:"zero",
    [age]:18
};
console.log(obj4);//{ name: 'zero', theAge: 18 }



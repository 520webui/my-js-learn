//js中的变量分为两种类型：基本类型、引用类型
//基本类型：简单的数据段。按值访问，操作保存在变量中的实际的值
//引用类型：可能由多个值构成的对象。按引用访问，操作的对象的引用，而不是实际的对象。


//一、基本类型的分类
//undefined null Boolean Number String

//null 和undefined的区别
//1、相同
// (1)在if语句中，都会自动被转换成false
let a =undefined;
if(!a) console.log(a);
let aa=null;
if(!aa) console.log(aa);
//(2)在相等运算符中，两者是相等的
if(undefined==null) console.log(1);

//2、不同之处
//undifined 指的是一个基本类型没有值（缺少值）
//变量声明了，但是没有赋值时，这时变量等于undefined
let i;
console.log(i);//undefined

//函数没有返回值时，默认返回undefined
let x =f();
console.log(x);

//调用函数时，没有提供需要的参数，该参数等于undefined
function f(x) {
    console.log(x);
}
f()//undefined

let o = new Object();
o.p //undefined
//null表示一个空对象的指针，可作为原型链的终点
console.log(typeof null); //Object
console.log(null instanceof Object);; //false

//二. 引用类型的分类
//Object Array Date RegExp Function

//三. 三种类型的检测方法

//1. typeof

//检测一个变量是否是 string、number、boolean、undefined

//检测一个变量是否为函数

let ab = '123';
let b = 22;
let c = false;
let d;
let e=function () {

};

console.log(typeof ab);//String
console.log(typeof b);//Number
console.log(typeof c);//boolean
console.log(typeof d);//undefined
console.log(typeof e);//function

//当用typeof 来检测引用类型和null时，返回的都是object
let ee={};
let ff=null;
console.log(typeof ee);//Object
console.log(typeof ff);//Object

//2. instanceof

//检测引用类型、null
let myArr=[1,2,3];
console.log(myArr instanceof Array);//true
//用instanceof 检测基本类型都会返回false

//instanceof实现原理
//实例 instanceof 构造函数
//只要后面的构造函数是原型链中出现过的构造函数 就会返回true,并不仅仅是判断实例的constructor的指向

//举个例子
function Bar() {};
function Foo() {};
Bar.prototype = new Foo();//Bar继承了Foo

console.log(new Bar() instanceof Bar);//true
console.log(new Bar() instanceof Foo);//true

//3. Object.prototype.toString.call()
//用于检测内置对象
console.log(Object.prototype.toString.call([]));//[obejct Array]
//检测数组的方法
console.log(Array.isArray([]));//true


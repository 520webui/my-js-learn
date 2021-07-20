/*
 * @Description: file content
 * @Author: Ji Qin
 * @Date: 2021/4/28 14:58
 */

/**
 *  apply、call、bind是为了手动绑定this对象，合理利用apply、call和bind会使得javaScript代码更加优雅。
 *
 *    一. js中的apply()、call()、bind()
 *
 *   1. apply:应用某一对象的一个方法，用另一个对象替换当前对象。
 *
 *   apply(obj,参数数组)
 *
 *   2. call:与apply的作用一样，只是参数列表不一样
 *
 *   call(obj,参数1,参数2…)
 *
 *   3. bind()与call和apply的不同之处在于，bind会返回一个绑定函数
 *
 *   bind()会创建一个新的函数，称为绑定函数，,绑定函数会以创建它时传入 bind()方法的第一个参数作为 this，传入 bind() 方法的第二个以及以后的参数
 *   加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数。
 *
 *   bind(obj,参数1，参数2…)
 *
 * */

//例子
let xw={
    name:'小王',
    gender:'男',
    age:18,
    love:'爱好',
    say: function (a,b) {
        console.log((this.love + a + b));;
    }
}
let xh = {
    name: '小红',
    gender:'女',
    age:18,
    love:'跳舞',
}

xw.say();

//1、用call()实现
xw.say.call(xw,'my','call');
//2、用apply()实现
xw.say.apply(xh,['my','apply'])
//3、用bind()实现
xw.say.bind(xh,'my','bind')();
xw.say.bind(xw)('my','bind');

//4. js中将类数组对象转化为一般数组
//(1) 什么是类数组对象
let myObj = {
    "0": 1,
    "1": 2,
    "2": 3,
    "length": 3
}
//myObj就是一个类数组，myObj是一个对象，此对象将数组的下标作为属性名。

//(2) arguments对象是类数组对象

//在函数体内，arguments是收到的实参副本。（注意是实参，不是形参，由实际接收到的参数决定）


function myfuc() {
    console.log(arguments[0]+arguments[1]+arguments[2]);
    console.log(arguments.length);
}

myfuc("h","d",'w');//控制台打印出 hdw 3

//(3) 如何将类数组对象转换为一般的数组

//利用数组中的slice()方法，此方法会生成一个新的数组。
let argArr=Array.prototype.slice.call(arguments,0);

let myObject={
    '0':'zero',
    '1':'one',
    '2':'two',
    '3':'three',
    '4':'four',
    length: 5
}
console.log(myObject);
let a=Array.prototype.slice.call(myObject,0)
console.log(a);

let aa = undefined;
if (!aa) console.log(aa);



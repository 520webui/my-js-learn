/**
 *  常规写法
 * @param parameter
 */
function run1(parameter) {
    console.log(parameter)
}

run1("常规写法");

/**
 * 匿名函数写法
 * @param parameter
 */
let run2 = function (parameter) {
    /**
     * 这是一个声明函数的写法，左边是一个变量，右边是一个函数的表达式，
     * 意思就是把一个匿名函数的表达式赋值给一个变量myrun，
     * 只是声明了一个变量指向了一个函数对象
     * */
    console.log(parameter);
}
run2("匿名函数写法");

/**
 * 将方法作为一个对象
 * 作为对象方法，函数写法，这里创建了两个函数外用{}包裹起来
 * @type {{run4: Text.run4, run3: Text.run3}}
 */
let Text = {
    run3: function () {
        console.log("这个必须放在一个对象内部，放在外边会出错");
    },
    run4: function () {
        console.log("这个必须放在一个对象内部，放在外边会出错");
    }
}

Text.run3();
Text.run4();
/**
 * 给对象添加方法
 */
let funName = function () {
}
funName.prototype.way = function () {
    console.log("这是在funName函数上的原始对象上加了一个way方法，构造函数中用到");
}

let funname = new funName();//创建对象
funname.way();//调用对象属性

/**
 * js自执行函数查到了几种不同写法，
 */
/**
 * 方法一
 */
(
    function () {
        console.log("最前最后加括号");
    }()
);
/**
 * 方法二
 */
(function () {//这种方法比方法1少了一个代码整体性的好处
    console.log("function外面加括号");
})();
/**
 * 方法三
 */
!function () {
    console.log("function前面加运算符，常见的是！与void.");
}();
void function () {
    console.log("function前面加运算符，常见的是！与void.");
}();
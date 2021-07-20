let str='http:baidu.com?id="123456"&age=18';
//功能：把字符串中的关键字，提取为对象的形式
String.prototype.queryURLParameter=function(){
    let obj={};
    let reg=/([^?=&]+)=([^?=&]+)/g;
    this.replace(reg,function($0,$1,$2){
        obj[$1]=$2;
    })
    return obj;
}
let obj=str.queryURLParameter()
console.log(obj)




//一. js中的location对象

//window.location对象

//location对象的属性

//hostname web主机域名
//pathname 当前页的路径和文件名
//port web主机的端口
//protocol 使用的web协议
//href 当前的url
//location.search是从？开始的字符串

let linkURL = 'http://localhost:8080/String/string_6.html?name1=value1&name2=value2';
let ObjString = linkURL.queryURLParameter();
console.log(ObjString);
//那么 location.search = '？name1=value1&name2=value2';

//二. 什么是字典对象

//字典是以键值对形式存储数据的数据结构，就像电话号码薄里的名字和电话号码那样的一一对应的关系。

//三. 提取url中的参数

//当我们使用GET请求时，会将查询的字符串追加到url的末尾，以便将信息发送给服务器。

//举个栗子：

//linkURLTwo = 'http://localhost:8080/String/string_6.html？name1=value1&name2=value2';
//提取url中的查询参数并解析成字典对象的方式：

//拆字符
//正则匹配
//强烈建议用正则匹配，因为url允许用户随意输入，如果用拆字符的方式，有任何一处没有考虑到容错，就会导致整个js都报错。而正则就没有这个问题，
//他只匹配出正确的配对，非法的全部过滤掉，简单，方便。

//下面的例子是用正则匹配的方法：

/*String.prototype.getQueryObject=function () {
    //获取从?之后的键值对
    var search = location.search.substr(1);

    var obj = {};
    var reg = /([^?&=]+)=([^?&=]*)/g;

    search.replace(reg, function (rs, $1, $2) {
        var name = decodeURIComponent($1);
        var val = decodeURIComponent($2);
        val = String(val);
        obj[name] = val;
        return rs;
    });
    return obj;
}*/

//rs是匹配的子串，$1和$2代表匹配的第n个分组，这里也就是([^?&=]+)（即query的name）和([^?&=]*)（即query的value），
//遍历同时将value赋值到obj对应的name属性上；后面的函数会遍历字符串中所有匹配正则表达式的字符串。

//a.replace(reg,函数)；

//意思是：字符串a中，满足正则表达式reg的字符串都执行后面的函数。
//使用split分割法

/*String.prototype.getQueryObjectTwo=function () {
    //获取从?之后的键值对
    //var url = location.search;

    var obj = {};

    if(url.indexof('?') != -1) {
        var str = url.substr(1);
        var strs = str.split('&');

        for(var i = 0; i < strs.length; i++) {
            var name = decodeURIComponent(strs[i].split('=')[0]);
            var value = decodeURIComponent(strs[i].split('=')[1]);

            obj[name] = value;
        }
    }
    return obj;
}*/

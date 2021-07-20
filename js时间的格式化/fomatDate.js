let strDate ="2021-03-24 15:31:00 GMT"
let str='{0}年{1}月{2}日 {3}时{4}分{5}秒';
//功能：strDate 最终替换为 str这个模板的形式
/*思路
* 1.把strDate变成数组 -match；
* 2.把str中匹配到的数字替换了模板；
* */
String.prototype.myFomatDate=function(str){
    //1.把strCode字符串转成了数组
    let ary=this.match(/\d+/g);//split
    //2.用str这个模板中匹配到的数字作为数组的索引，取出数组对应项的内容，拿这个内容替换了模板中{n};
    return str.replace(/{(\d+)}/g,function($0,$1){
        let tmp=ary[$1];
        tmp=tmp>=0&&tmp<10?'0'+Number(tmp):tmp;
        return tmp;
    })

};
console.log(strDate.myFomatDate(str))

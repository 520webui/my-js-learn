//以什么开始 以什么结束 前开后闭
let str='123456789'
console.log(str.startsWith("56", 4));//true
console.log(str.startsWith("56", 3));//false
console.log(str.endsWith("67", 7));//true
console.log(str.endsWith("67", 8));//false

//repeat 平铺
let str1="123";
console.log(str1.repeat(1000));

let name="zero";
let age=40;
let gender="男";
let str2=`姓名：${name}
    年龄: ${age}'岁'
    性别: ${gender}'岁'
`;
console.log(str2);//姓名：zero 年龄: 40'岁' 性别: 男'岁'




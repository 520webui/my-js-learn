{
    let a =1;
    var b=1;
    console.log(a);
}

//块级作用域
let bb;
if(true){
    let aa = 22;
    bb=2;
    console.log(aa);
}
console.log(bb);

//块级作用域的循环遍历

for (let i = 0; i < 5; i++) {
    setTimeout(()=>{
            console.log(i);
        }
        ,1000)
}
/*let j;
for (j= 0; j < 5; j++) {
    setTimeout(()=>{
            console.log(j);
        },1000)
}
for (let k = 0; k < 5; k++) {
    (function (k) {
        setTimeout(()=>{
                console.log(k);
            }
            ,1000)
    })(k)
}*/

//let和var的区别

//let 不能重复声明
var bbb=1;
var bbb=2;
let aaa=10;
//let aaa=20;
{
    let aaa=30;
    console.log('aaa',aaa);
}
console.log('bbb',bbb);


//let 不会被预解析，必须先声明后使用
console.log('aaaa',aaaa);
var aaaa=1111;

//console.log(bbbb);
//let bbbb=2222;

let fn=function () {
    console.log("let 一定要先声明，再使用");
}
fn();

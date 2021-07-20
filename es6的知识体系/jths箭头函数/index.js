let fn=()=>{
    console.log(1);
}
fn();

let fn1 = (nub1,nub2)=>nub1*nub2;

console.log(fn1(1, 5));
/**
 * 参数 => 返回值
 *
 * （参数1，参数2）=> 返回值
 *
 * （）=>{
 *     执行语句
 *     return
 * }
 */

let fn2=(a,...arg)=>{
    //console.log(arguments);
    console.log(a,arg);//1 [ 2, 3, 4 ]
}
fn2(1,2,3,4)
/**
 * 箭头函数本事没有不定参
 *
 * rest参数 剩余参数
 */

/*document.onclick=function () {
    let fn3=(a3,...arg)=>{
        console.log(this);//
    }
    fn3();
}*/

/**
 * 箭头函数this指向，箭头函数定义时所在的作用域的this
 */
/*function fn4(nub=0,nub2=0){
    console.log(nub+nub2);//0
}*/

let fn4=(nub=0,nub2=0)=>{
    console.log(nub+nub2);//0
}
fn4();





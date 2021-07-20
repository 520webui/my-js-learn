/*
 * @Description: file content
 * @Author: Ji Qin
 * @Date: 2021/6/9 11:50
 */

/**
 * 单例模式
 * */
let namespace=(()=>{
    let n =12;
    let fn=()=>{
        //...
        console.log('fn11');
    }
    let sum=()=>{
        console.log('sum22');
    }
    return {
        fn:fn,
        sum:sum
    }
})();

namespace.fn();//fn11
namespace.sum();//sum22


/***
 * 示例
 */
let skipRender=(()=>{
    let fnn=()=>{
       console.log('这是skipRender');
    };
    return{
        init:()=>{
            fnn();//调自己的接口
        },
        fnn,//向外暴露方法
    }
})()

skipRender.init();
skipRender.fnn();

let weatherRender=(()=>{
    let fn=()=>{
        console.log('这是weatherRender');
    };
    return{
        init:()=>{
            fn();//调取自己模块中的方法直接调取即可
            skipRender.init();//调取别人模块中的方法
            skipRender.fnn();//调取别人模块中的方法
        }
    }
})();
weatherRender.init();

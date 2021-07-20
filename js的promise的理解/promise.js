/*
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //成功
        resolve('Hello World');
        //失败
        //reject('error message')
    },1000)
}).then((data)=>{
    console.log(data);
    console.log(data);
    console.log(data);
    console.log(data);
}).catch((err)=>{
    console.log(err);
})*/

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ok');
        //reject('error message');
    },1000)
}).then(data=>{
    console.log(data);
},err=>{
    console.log(err);
})

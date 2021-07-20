let n=0;
let timer=null;
function fn(){
    n++;
    theFn();
    console.log(n);
    if(n>=5){
        theFnFive()
        return;
    }
    clearInterval(timer);
    timer=setTimeout(fn,1000);
}

function theFn() {
    console.log(333);
}

function theFnFive() {
    console.log(555);
}
fn();
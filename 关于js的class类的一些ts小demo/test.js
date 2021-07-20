/*
const object1 = {
    a: 1,
    b: 2,
    c: 3
};
const object2 = Object.assign({c: 4, d: 5, e: 8}, object1);
console.log(object2.c, object2.d);
*/

class Iterator {
    constructor(container) {
        this.list=container.list;
        this.index=0;
    }
    next(){
        if(this.hasNext()){
            return this.list[this.index++];
        }
    }
    hasNext(){
        if(this.index>=this.list.length){
            return false;
        }
        return true;
    }
}
class Conatiner {
    constructor(list) {
        this.list=list;
    }
    getIerator(){
        return new Iterator(this);
    }
}

class Iterator {
    constructor(conatiner) {
        this.list = conatiner.list;
        this.index = 0;
    }

    next() {
        if (this.hasNext()) {
            return this.list[this.index++];
        }
    }

    hasNext() {
        if (this.index >= this.list.length) {
            return false;
        }
        return true;
    }
}

class Conatiner {
    constructor(list) {
        this.list = list;
    }

    getIterator() {
        return new Iterator(this)
    }
}

let container=new Conatiner([1,2,3,4,5]);
let iterator=container.getIterator()
while (iterator.hasNext()){
    console.log(iterator.next());
}
class State {
    constructor(color) {
        this.color = color
    }

    handle(context) {
        console.log(`turn to ${this.color} light`);
        context.setState(this)
    }
}

class Context {
    constructor() {
        this.state = null
    }

    setState(state) {
        this.state = state
    }

    getState() {
        return this.state
    }
}

//测试代码
let context = new Context()

let greed = new State('greed');
let yellow = new State('yellow');
let red = new State('red');

greed.handle(context)
console.log(context.getState());

yellow.handle(context)
console.log(context.getState());

red.handle(context)
console.log(context.getState());
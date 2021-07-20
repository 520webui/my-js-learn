class Getandset {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

}
let obj=new Getandset()
obj.setName('lilei333')
obj.setAge(10)

console.log(obj);
console.log(obj.name);
console.log(obj.age);
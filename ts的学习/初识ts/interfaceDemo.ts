interface Person {
    name:string
    age:number
}
function setPerson(person:Person) {
    return '我的名字：' + person.name + ',  今年' + person.age + '岁';
}

let tehUser = {
    name:'zero',
    age:18,
}

console.log(setPerson(tehUser));
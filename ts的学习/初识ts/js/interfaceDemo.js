function setPerson(person) {
    return '我的名字：' + person.name + ',  今年' + person.age + '岁';
}
var tehUser = {
    name: 'zero',
    age: 18,
};
console.log(setPerson(tehUser));

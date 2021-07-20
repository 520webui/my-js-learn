var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return User;
}());
function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var theNewClassUser = new User('Yee', 'Huang');
//console.log(greeter(theNewClassUser))
console.log(theNewClassUser);

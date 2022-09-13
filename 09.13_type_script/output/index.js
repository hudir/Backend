"use strict";
let age = 111, fullname = "hudir", gender = true;
gender = false;
let emptyArr = [1, 'eee', true], arrOfNumber = [1, 2, 3, 4, 5, 6];
arrOfNumber.push(4);
// object type for ts
let user;
// object with data
user = {
    id: 5,
    name: "hudir",
    address: {
        street: "123 Street",
        city: "berlin",
        zip: 12345
    }
};
user.name = "asd4";
// tuple: contains 2 field of data with 2 data type
// always in a array
let config = [5000, 'http://localhost'];
let tupleType = [5, "hudir"];
// enum: set of const data
// enum VarName must be capital
// sequences used like 0, 1, 2
// enum: ['admin', 'teacher', 'student']
// enum Size{a,b,c} a=0 b=1 c=2
var Size;
(function (Size) {
    Size[Size["a"] = 5] = "a";
    Size[Size["b"] = 2] = "b";
    Size[Size["c"] = 8] = "c";
})(Size || (Size = {}));
// console.log(Size.a)
function shoeSize(mySize) {
    console.log(mySize);
    console.log(Size.a);
}
shoeSize(50);
function test(age) {
    return age;
}
test(12);

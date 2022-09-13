let age: number = 111 
  , fullname: string = "hudir"
  , gender:boolean = true


gender = false

let emptyArr = [1, 'eee', true]
  , arrOfNumber: number[] = [1, 2, 3, 4, 5, 6]

arrOfNumber.push(4)

// object type for ts
let user: {
  id:number,
  name:string,
  address:{
    street: string,
    city:string,
    zip:number
  }
}
// object with data
user = {
   id:5,
   name:"hudir",
   address:{
    street: "123 Street",
    city: "berlin",
    zip:12345
   }
}

user.name = "asd4"


// tuple: contains 2 field of data with 2 data type
// always in a array
let config: [number, string] = [5000, 'http://localhost']
let tupleType: [number, string] = [5, "hudir"]

// enum: set of const data
// enum VarName must be capital
// sequences used like 0, 1, 2
// enum: ['admin', 'teacher', 'student']
// enum Size{a,b,c} a=0 b=1 c=2
enum Size{a=5, b=2, c=8}
// console.log(Size.a)

function shoeSize(mySize: Size){
  console.log(mySize["2"])
  console.log(Size.a)
}
shoeSize(50)
function test(age: number) {
  return age
}
test(12)
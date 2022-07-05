// console.log("Hi")

const PromptSync = require('prompt-sync');

// console.log("This is a Simple CLI Program")

const isArray = (arr , callback=average) => {
   if (arr.filter(x=> !isNaN(+x)).length===0) console.log("Empty Array");
   else if(Array.isArray(arr)) return callback(arr);
   else console.log("Data type exception");
}

const average = arr => arr.filter(x=> !isNaN(+x)).reduce((a,x)=>a + +x, 0) / arr.filter(x=> !isNaN(+x)).length ;
// console.time(average([1,2,3,4,5,6])) 

// console.log(isArray( [1,2,3], average))
// console.log(isArray( [1,2,'3'], average))
// console.log(isArray( [1,2,3,"4s"], average))
// console.log((Number('s') == 'NaN'))

// console.log(process.argv.slice(2))
const sum = arr =>  arr.filter(x=> !isNaN(+x)).reduce((a,x)=>a + +x, 0) ;

const action = process.argv.slice(2,3)[0]
const array = process.argv.slice(3)

const checkAction = (actionArg=action , arr = array) => {
    if (actionArg == 'avr') return isArray(arr, average )
    else if (actionArg == 'sum') return isArray(arr , sum )
    else return "what is that?"
}


// let myArray = process.argv.slice(2)
// console.log(isArray(myArray))
// console.log(process.argv.slice(2))

console.time("time")
console.log(checkAction())
console.timeEnd("time")


// ----------------------------------------------


// var prompt = require('prompt-sync')();
// //
// // get input from the user.
// //
// var n = prompt('which do you want ? \b 1-sum, 2-average ');
// console.log("You choose ",n)
// var arr2 = prompt('please enter your number or numbers(use space): ')
// console.log("Array is " ,arr2.split(' '))
// const checkAction2 = (actionArg=n , arr = arr2.split(' '))=>{
//     switch(actionArg){
//         case "1" :
//         case "sum" :
//             return "the sum is "+sum(arr);
//         case "2" :
//         case "avr":
//         case "average" :
//             return "average is "+average(arr);

//         default :
//             return "bye bye"
//     }
// }

// console.log(checkAction2())
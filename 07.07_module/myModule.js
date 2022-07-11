/*
* my first module
* what could be a module: string, number or any data type, function, object
* you must export the data from module
* note: you must export the data from module, so other file can import(require) it
 */

// a string data
exports.name = "Hudir";
exports.age = 32

exports.showString=()=>"Show me the way"

exports.obj ={
    city:"Berlin",
    postNr: "64347"
}

// 2nd way to export data
module.exports.method2 = () => "I am method 2 for exports"
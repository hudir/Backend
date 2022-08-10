# MangoDB CLI

## output database to json file
mongoexport --db=E10 --collection=students --out=studets.json


cls --> clear

show databases
show dbs

show collections


use database-name 
// if not exist will create a new one

db.users.insertOne({name: "Hudir", age: 40, email: "hudir@12.com"})




db.users.find({name:"Hudir"})
db.users.find({name:"Hudir"}).pretty()
db.users.findOne({name: "Hudir"})


db.users.insertMany([{name:"John", age:15, email:"dff.v"},{name: "Smith", age:21, email: "fdfsdf.c"},{name: "Joe", age:64, email: "huds.om"},{name: "Adam", age: 43, email: "dsd.g"}])


db.users.updateOne({name:"MB"}, {$unset: {"adress"}}, {upsert:true})


db.users.updateOne({name:"MB"}, {$unset: {adress:""}}, {upsert:true})

E10> db.users.updateMany({name:"Hudir"}, {$set: {age:0}}, {upsert:true}) 


db.users.deleteOne({name:"MB", email:"bmw.com"})
db.users.deleteMany({name:"Hudir"})

E10> db.users.updateMany({}, {$set: {skills:["js","c#"]}})



## update arr
db.students.updateOne({name: "Student1"}, {$push: {skills: "Mangodb"}})

### push multis to arr
db.students.updateOne({name: "Student1"}, {$push: {skills: {$each: [5,3,3,2,1]}}})

### doing two things together
 db.students.updateOne({name: "Student1"}, {$push: {skills: {$each: ["html", "css"]}}, $set: {"address.code": 12345}})

db.students.updateOne({name:"Student1"}, {$push: {skills: {$each: ["go","ruby"]}}, $set: {"address.c":444 }})


## modifi one element in arr
db.students.updateOne({name:"Student2", skills: "Python"}, {$set:{"skills.$": "New Python"}})

## pop items from arr
db.students.updateOne({name:"Student1"}, {$pop: {skills:1}})
1 will take the last one 
-1 thr first one

## pull itme with its value from arr
db.students.updateOne({name:"Student1"}, {$pull: {skills:4}})
the element with value 4 is out


$gt ==> >
$gte ==> >=
$lt ==> <
$lte ==> <=

db.students.find({age:{$gt: 30}})

$and
db.students.find({$and :[{age: {$gt: 30}}, {name:"Student1"}]})
db.students.find({$and :[{age: {$gte: 29}}, {age:{$lte:35}}]})


$not

$or => use Arr to pass more options/canditions
db.students.find({$or:[{age: {$gt: 30}}, {name:"Student1"}]})


## 1 mean true, 0 mean falsh (id is default showing)
E10> db.students.find({}, {name:1})
[
  { _id: ObjectId("62f35e4d06338b5cf1addbec"), name: 'Student1' },
  { _id: ObjectId("62f3623006338b5cf1addbed"), name: 'Student2' },
  { _id: ObjectId("62f3623006338b5cf1addbee"), name: 'Student3' },
  { _id: ObjectId("62f3623006338b5cf1addbef"), name: 'Student4' },
  { _id: ObjectId("62f3a02fb29dc6736c47c1a5"), name: 'Student5' }
]
E10> db.students.find({}, {_id:0,name:1})
[
  { name: 'Student1' },
  { name: 'Student2' },
  { name: 'Student3' },
  { name: 'Student4' },
  { name: 'Student5' }
]
E10> db.students.find({}, {_id:0,name:1}).limit(2)
[ { name: 'Student1' }, { name: 'Student2' } ]


db.students.find({}, {_id:0,name:1, skills:1})
[
  {
    name: 'Student1',
    skills: [
      1, 2, 3, 5,
      6, 7, 8
    ]
  },
  {
    name: 'Student2',
    skills: [
      'JavaScript',
      'NodeJS',
      'Python3',
      { arrayFilters: [ { element: 'Python3' } ] },
      'Python3',
      'New Python',
      'New Python'
    ]
  },
  { name: 'Student3', skills: [ 'VB', 'NodeJS', 'Python' ] },
  { name: 'Student4', skills: [ 'Ruby', 'NodeJS', 'Python' ] },
  { name: 'Student5', skills: [] }
]


## sort 
db.students.find({}, {_id:0,name:1, age:1}).sort("age")
[
  { name: 'Student2', age: 21 },
  { name: 'Student1', age: 30 },
  { name: 'Student3', age: 30 },
  { name: 'Student4', age: 40 },
  { name: 'Student5', age: 40 }
]

## contains / / or use regex
db.students.find({name: /S/})
db.students.find({name: {$regex: /St/}})

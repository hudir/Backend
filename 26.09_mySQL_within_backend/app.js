require('dotenv').config()
const SQL = require('./models/SQL')

SQL.getAllStudents().then(stu=>{
    console.log(stu)
}).catch(err=>console.log(err))


// SQL.updataStudentNameById(17, 'yang')
// .then(stu=>console.log(stu)).catch(err=>console.log(err))
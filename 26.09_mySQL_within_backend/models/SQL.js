// create comunication to MySQL server
// methods tobe used outside
// Schema is created in SQL not here
// npm mysql

// require mysql
const mysql = require('mysql')

const connectionConfig = {
    host: process.env.SQL_HOST,
    port: process.env.SQL_PORT,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASS,
    database: process.env.SQL_DATABASE,
    multipleStatements: true // allow send more queries one time and result will be inside [firstResult, secondResult, ...]
}

let con ;

function connect(){
    return new Promise((resolve, reject)=>{
        if(con){
            // check the state
            if(con.state == "disconnected"){
                con.connect(error=>{
                    if(error){
                        reject(error)
                    } else {
                        resolve()
                    }
                })
            } else {
                resolve()
            }
        } else {
            // con is null
            con = mysql.createConnection(connectionConfig);
            con.connect(error=>{
                if(error){
                    reject(error)
                } else {
                    resolve()
                }
            })
        }
    })
}

function sendQuery(query){
    return new Promise((resolve, reject)=>{
        connect()
        .then(()=>{
            con.query(query, (err, result, fields)=>{
                if(err) reject(err);
                else {
                    // console.log(fields)
                    resolve(result);
                }
            })
        })
        .catch(err=>reject(err))
    })
}

// get all data from students table
function getAllStudents(){
    return new Promise((resolve,reject)=>{
        // first thing call connect() to make sure there is a connection
        connect()
           .then(()=>{
               // the connection is success
               // sending query
               sendQuery('SELECT name AS "Students Name" FROM students;SELECT * FROM address;')
               .then(result=>resolve(result))
               .catch(err=>reject(err))
           }).catch(error=>reject(error))
    })
}

const updataStudentNameById = (studentID, newName) =>{
    return new Promise((resolve, reject)=>{
        sendQuery(`UPDATE students SET name='${newName}' WHERE id=${studentID};`)
        .then(result=>resolve(result))
        .catch(err=>reject(err))
    })
}


 module.exports = {getAllStudents,connect,updataStudentNameById}
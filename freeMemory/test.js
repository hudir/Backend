// get free memory from my device
const os = require('os')

let freeMen = os.freemem()
let totalMen = os.totalmem()
let usedMen = totalMen - freeMen

usedMenPresentage = Math.ceil(usedMen / totalMen * 100)+ '%'
freeMenPresentage = Math.floor(freeMen / totalMen * 100)+ '%'
// console.log(freeMenPresentage)

module.exports={usedMenPresentage, freeMenPresentage}
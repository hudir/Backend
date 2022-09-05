const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    // or service: "yahoo",
    auth: {
      user : process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  })
  
  /**
   * This function will send Email.
   * @param {String} mailTo 
   * @param {String} subject 
   * @param {String} message 
   * @returns 
   */

  const send = (mailTo, subject, message) => new Promise((resolve, reject)=>{
    transporter.sendMail({
        from:process.env.EMAIL_USER,
        to: mailTo,
        subject: subject,
        text: message,
        // html: req.body.message
      }).then(info=>resolve(info)).catch(err=>reject(err))
      
  })

  module.exports = {send}
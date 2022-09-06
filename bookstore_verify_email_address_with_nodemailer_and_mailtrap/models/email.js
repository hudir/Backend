const nodemailer = require('nodemailer')

// const transporter = nodemailer.createTransport({
//     host: 'smtp-mail.outlook.com',
//     port: 587,
//     // tls: {
//     // ciphers: 'SSLv3'
//     // },
//     auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD
//     }
//     }) 

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 25||587||465||2525,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

const send = async (emailTo, subject, message) => {
    try {
        const info = await transporter.sendMail({
            from: "ThisIsFakeEmail@bookstore.com",
            to: emailTo,
            subject: subject,
            html: message
        })
        return info

    } catch(err) {
        return err
    }
}

module.exports = send
const Authors = require('../models/Authors')
    , Verification = require('../models/Verifications')
    , send = require('../models/email')

const registerPage = (req, res)=> {
    // console.log(req.get('host'))
    res.render('mainTemplate', {
        content: "register",
        title:"Register"
    })
}

const addAuthor = (req, res)=>{
    Authors.create(req.body)
    .then(insertedAuthor=>{
        const {_id, email} = insertedAuthor;
        const randomString = Math.random().toString(36).slice(-8)

        new Verification({
            userId: _id,
            secretKey: randomString
        }).save().then(data=>{
            const msg = `Hello,<br> The Email "${email}" is used to register in Our Book Store. To verify Your account please click on <a href="${req.get('origin')}/verify?uerId=${data.userId}&secretKey=${data.secretKey}">This Link</a>
            Thanks
            BookStore Team.`

            send(email, 'Book Store Verify Email', msg).then(result=>/* res.json(result) */ res.json({message: "An Email sent successfuly"}))
            .catch(error=>res.render('mainTemplate', {title: 'ERROR on sending email', content: '404', error: error}))

        }).catch(error=>res.render('mainTemplate', {title: 'ERROR on verification', content: '404', error: error}))
    })
    .catch(error=>res.render('mainTemplate', {title: 'ERROR on database', content: '404', error: error}))

}

const verifyEmail = (req, res)=>{
    Verification.findOne(req.query,(err, data)=>{
        if(err)  res.render('mainTemplate', {title: 'ERROR not found on Verifications', content: '404', error: err})
        else if(data) {
            Authors.findByIdAndUpdate(data.userId, {verified: true}, (err,result)=>{
                if(err) res.render('mainTemplate', {title: 'ERROR update verify in database', content: '404', error: err})
                else {Verification.deleteOne(req.query, (err, del)=>{
                    if(err) res.render('mainTemplate', {title: 'ERROR on delete, Verification done', content: '404', error: err})
                    else {res.json('nice, Email Verification Done')}
                })}
            })

        } else res.json('wow, this link is expires')
    })
}






module.exports = {registerPage, addAuthor, verifyEmail}

//  res.send('<script>alert("check your email to confirm")</script>')
const adminRouter = require('express').Router()


adminRouter.get('/', (req, res)=>{
    res.json('Admin <br> Welcome '+ req.session.user.name)
})


adminRouter.get('/edit', (req, res)=>{
    res.json('edit')
})

module.exports = adminRouter
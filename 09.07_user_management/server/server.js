const app = require('express')()
    , cors = require('cors')


require('dotenv').config()
require('mongoose').connect(process.env.DB, err=>console.log('DB connected'))

app.use(require('express').json())
app.use(cors)












app.listen(process.env.PORT || 3000, err=> console.log('server is running on 3000'))
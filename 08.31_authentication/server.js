const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const mongoose = require('mongoose');
const cors = require('cors')
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
// connect DB
mongoose.connect(process.env.DB_LINK)
.then(()=>{
    console.log('My Database is connected...')
})
.catch(error=> console.log('Database is not connected'))

app.use(express.json());
app.use(cors())
app.use('/', indexRouter)
app.use('/user', userRouter)

app.listen(PORT, ()=>{
    console.log(`The Server is running Successfully in ${PORT} .....`);
});

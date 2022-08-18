const express = require('express');
const app = express();
//Task: Add .env config here so later we can use it
const PORT = process.env.PORT;
const mongoose = require('mongoose');

// connect DB
// task: ADD YOUR DB LINK FROM .env
//mongoose.connect('ADD YOUR DB LINK FROM .env');

app.use(express.json());

// Task: add cors settings here to remove cors authetication problem

// Task : add all API routes setup here


/**
 * task : Initial testing link. 
 * Please remove this it test code if its okay 
 * and add index.js router for landing page routes
 */
app.get('/', (req, res)=>{
 res.send('Landing page is okay!')
});

/**
 * task : create index, user, product routes inside routes folder 
 * and import all of them here 
 * e.g routes paths:
 * 1. app.get('/') landing page
 * 2. app.get('/user/add')
 * 3. app.get('/product/add')
 */

app.listen(PORT, ()=>{
    console.log(`The Server is running Successfully in ${PORT} .....`);
});

import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/userRouter.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
dotenv.config()

mongoose.connect(process.env.DB , (err)=> err ? console.log("err") : console.log('database on'))


app.use('/user', userRouter)








app.listen(process.env.port || 5000, (err)=> err ? console.log("err") : console.log('port on 5000'))
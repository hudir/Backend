import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { body , validationResult} from "express-validator";

 
const app = express();
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();
 
const PORT = process.env.PORT;
 
const usersRouter = express.Router()
app.use("/", usersRouter);
usersRouter.get('/', (req,res)=>res.json('<h1>Nice to meet you</h1>'))

usersRouter.post('/create-user',[
    body("firstName").notEmpty().withMessage("First name is required").trim(),
    body("email", "Email is required").isEmail().normalizeEmail(),
    body("password", "Password is required and length min 4 characters").isLength({min:4}).custom((val, {req})=>{
        if(val !== req.body.confirm_password){
            throw new Error("Password don't match!")
        } else return val
    })
], async (req,res)=>{
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            res.status(422).json({
                errors: errors.array().map(err=>err.msg)
            })

        } else res.json('Nice to see you')
    } catch(err) {
        res.status(409).json({ msg: error.message });
    }

    
})

 
mongoose
 .connect(process.env.CONNECTION_URL)
 .then(() =>
   app.listen(PORT, () =>
     console.log(`Database connected and server running on port: `, PORT),
   ),
 )
 .catch((error) => console.log(error));
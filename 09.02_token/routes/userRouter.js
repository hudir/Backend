import { Router } from 'express'
import {userSignup,  userLogin, userProfile} from '../controllers/userSignup.js'
import auth from '../middleware/auth.js'

const userRouter = Router()

userRouter.post('/', userSignup)

userRouter.post('/login', userLogin)

userRouter.get('/profile', auth, userProfile)

export default userRouter
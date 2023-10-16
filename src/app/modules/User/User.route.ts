import express from "express"
import { UserController } from "./User.controller"

const UserRouter = express.Router()

 UserRouter.post('/create',UserController.createUserController)
 UserRouter.post('/ami',UserController.signupUserController)
 export default UserRouter;
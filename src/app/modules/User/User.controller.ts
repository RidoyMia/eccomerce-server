import express, { NextFunction,Request,Response } from "express";
import { Iuser } from "./User.interface";
import bcrypt from 'bcrypt'
import { config } from "../../../config/envpath";
import { userService } from "./User.service";
import jwt, { Secret } from "jsonwebtoken";
import { GlobalError } from "../../../gobalError/GlobalError";

const createUserController = async(req:Request,res:Response,next:NextFunction) : Promise<Iuser | any > =>{
    try {
       const userData = req.body;
       const hassingPassword = await bcrypt.hash(userData.password , 12 )
       userData.password = hassingPassword
       console.log(userData,'sss')
       
       const result = await userService.createUserService(userData);
       console.log(result,'resultttt')
    
     const {password,...others} =result
     
      
          if(result){
         
          res.status(200).send({
           action : true,
       
           others
          })
          }
     
    //    
    


    } catch (error) {
        GlobalError(error,req,res,next)
    }
}
const signupUserController = async(req:Request,res:Response,next:NextFunction) : Promise<Iuser | any > =>{
    try {
        const userInfo = req.body;
        const result = await userService.signupUserService(userInfo.email);
        const {password,...others} = result
        const isMatchPassword = await bcrypt.compare(userInfo.password,result.password)
        if(!isMatchPassword){
            GlobalError("password does not match",req,res,next)
        }
        else{
               const ACCESSTOKEN = await jwt.sign({email : result.email,role:result.role,userId : result.userId},config.ACCESSTOKEN as Secret, {expiresIn : config.ACCESSTOKEN_EXP})
          const REFRESHTOKEN = await jwt.sign({email : result.email,role:result.role,userId : result.userId},config.REFRESHTOKEN as Secret, {expiresIn : config.REFRESHTOKEN_EXP})
          res.cookie("refreshToken" , REFRESHTOKEN)

          res.status(200).send({
            action : true,
            ACCESSTOKEN,
            others
        
          })

        }
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}

export const UserController = {
    createUserController,
    signupUserController
}
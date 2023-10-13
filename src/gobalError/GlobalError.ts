 import { Prisma } from "@prisma/client"
import express,{Request,Response,NextFunction} from "express"
 
export const GlobalError = ( error:any,req:Request,res:Response,next:NextFunction)=>{
  let message =  error.message
  let status = 400
  if(error instanceof Prisma.PrismaClientKnownRequestError){
    message = error.message,
    status = 800
  }
  if(error instanceof Prisma.PrismaClientValidationError){
    message = error.message,
    status = 600
  }
  if(error instanceof Error){
    message = error.message
    status = 400
  }
  res.status(status).send({
    message,
    status
  })
    
}
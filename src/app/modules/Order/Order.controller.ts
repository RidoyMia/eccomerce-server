// createOrder,
// getAllOrderOfUser,
// getOrdersByMonthYear,
// deletedOrder

import { NextFunction,Request,Response } from "express";
import { Iorder } from "./Order.interface";
import { GlobalError } from "../../../gobalError/GlobalError";
import { orderService } from "./Order.service";
import jwt, { Secret } from "jsonwebtoken"
import { config } from "../../../config/envpath";


const createOrderController = async(req:Request,res: Response,next:NextFunction) : Promise<Iorder | any> =>{
    try {
        const orderInfo = req.body
        const result = await orderService.createOrder(orderInfo);
        res.status(200).send({
            action : true,
            result
        })
        
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}
const getAllOrderOfUserController = async(req:Request,res: Response,next:NextFunction) : Promise<Iorder[] | any> =>{
   try {
    const accesstoken = req.header;
    //@ts-ignore
    const userInfo = await jwt.verify(accesstoken,config.ACCESSTOKEN as Secret)
    if(!userInfo){
        GlobalError("accesstoken not valid",req,res,next)
    }
    else{
        //@ts-ignore
        const result = await orderService.getAllOrderOfUser(userInfo.email);
        res.status(200).send({
            action : true,
            result
        })
    }
    
   } catch (error) {
    GlobalError(error,req,res,next)
   }
}
const getOrderByMonthController = async(req:Request,res: Response,next:NextFunction) : Promise<Iorder[] | any> =>{
    // try {
    //     const accesstoken = req.header;
    // const userInfo = await jwt.verify(accesstoken,config.ACCESSTOKEN as Secret)
    // if(userInfo.role != "admin"){
    //     GlobalError("accesstoken not valid",req,res,next)
    // }
    // else{
    //     const result = await orderService.getOrdersByMonthYear();
    //     res.status(200).send({
    //         action : true,
    //         result
    //     })
    // }
        
    // } catch (error) {
    //     GlobalError(error,req,res,next)
    // }
}

const deletedOrderController = async(req:Request,res: Response,next:NextFunction) : Promise<Iorder | any> =>{
    try {
        const id = parseInt(req.params.id);
        const result = await orderService.deletedOrder(id);
        res.status(200).send({
            action : true,
            result
        })
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}

export const orderController = {
    createOrderController,
    getAllOrderOfUserController,
    getOrderByMonthController,
    deletedOrderController
}
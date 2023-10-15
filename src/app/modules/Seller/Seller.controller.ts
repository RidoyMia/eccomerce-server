// createSeller,
// getAllSeller,
// getSingleSeller,
// deleteSeller,
// updateSeler
// signupSeller
import jwt, { Secret } from "jsonwebtoken"
import express,{ NextFunction ,Request,Response} from "express";
import { Iseller } from "./Seller.interface";
import { sellerService } from "./Seller.service";
import bcrypt from "bcrypt"
import { GlobalError } from "../../../gobalError/GlobalError";
import { userService } from "../User/User.service";
import { config } from "../../../config/envpath";


const createSellerControler = async(req:Request,res:Response,next:NextFunction) :Promise<Iseller | any> =>{
    try {
        const sellerInfo = req.body;
        const hassignPassword = await bcrypt.hash(sellerInfo.password, 12)
        sellerInfo.password = hassignPassword
        const result = await sellerService.createSeller(sellerInfo);
        const {password,...others} = result
        res.status(200).send({
            action : true,
            others
        })       
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}
const getAllSellerController = async(req:Request,res:Response,next:NextFunction) : Promise<Iseller[] | any> =>{
    try {
        const options = req.query;
        const result = await sellerService.getAllSeller(options);
        res.status(200).send({
            result,
            action  : true 
        })
        
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}

const getSingleSellerController = async(req: Request,res: Response,next:NextFunction) : Promise<Iseller | any> =>{
    try {
        const id = parseInt(req.params.id);
        const result = await sellerService.getSingleSeller(id);
        res.status(200).send({
            action : true,
            result
        })
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}
const deleteSellerController = async(req: Request,res: Response,next:NextFunction) : Promise<Iseller | any> =>{
    try {
        const id = parseInt(req.params.id);
        const result = await sellerService.deleteSeller(id);
        res.status(200).send({
            action : true,
            result
        })
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}
const SingupSellerController = async(req: Request,res: Response,next:NextFunction) : Promise<Iseller | any> =>{
    try {
        const useData = req.body;
        const result = await sellerService.signupSeller(useData);
        const {password,...others} = result
        if(result){
              const ACCESSTOKEN = await jwt.sign({email : result.email,role:result.role},config.ACCESSTOKEN as Secret, {expiresIn : config.ACCESSTOKEN_EXP})
              const REFRESHTOKEN = await jwt.sign({email : result.email,role:result.role},config.REFRESHTOKEN as Secret, {expiresIn : config.REFRESHTOKEN_EXP});
              res.cookie("REFRESHTOKEN",REFRESHTOKEN)
              res.status(200).send({
                action : true,
                others,
                ACCESSTOKEN
            })
        }
       
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}

const sellerUpdateController = async(req: Request,res: Response,next:NextFunction) : Promise<Iseller | any > =>{
    try {
        const id = parseInt(req.params.id);
        const updateSelerInfo = req.body
        const result = await sellerService.updateSeler(id,updateSelerInfo);
        res.status(200).send({
            action : true,
            result
        })
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}


export const SellerController = {
    createSellerControler,
    getAllSellerController,
    getSingleSellerController,
    deleteSellerController,
    SingupSellerController,
    sellerUpdateController
}
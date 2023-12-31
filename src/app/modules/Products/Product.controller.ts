// createProduct,
//     getAllProduct,
//     getSingleProduct,
//     getProdutBySeller,
//     getAllByCategory,
//     deleteProduct,
//     updateProduct

import express,{ NextFunction ,Request,Response} from "express";
import { IProduct } from "./Products.interface";
import { GlobalError } from "../../../gobalError/GlobalError";
import { productService } from "./Product.service";
import jwt, { Secret } from "jsonwebtoken"
import { config } from "../../../config/envpath";


const createProdutController = async(req:Request,res:Response,next: NextFunction) : Promise<IProduct |any> =>{
    try {
        const productInfo = req.body;
        console.log(productInfo,'info')
        const result = await productService.createProduct(productInfo);
        console.log(result,'result of product')
        res.status(200).send({
            action : true,
            result
        })
    } catch (error) {
        GlobalError(error,req,res,next)
    }
    
}
const getAllProduct = async(req:Request,res:Response,next:NextFunction) : Promise<IProduct[] | any > =>{
    try {
        const options = req.query;
        
        const result = await productService.getAllProduct(options);
        res.status(200).send({
            action : true,
            result
        })
        
    } catch (error) {
        GlobalError(error,req,res,next) 
    }
}

const getSingleProductController = async(req:Request,res:Response,next:NextFunction) : Promise<IProduct[] | any > =>{
    try {
        const id = parseInt(req.params.id);
    const result = await productService.getSingleProduct(id);
    res.status(200).send({
        action : true,
        result
    })
    } catch (error) {
        GlobalError(error,req,res,next) 
    }
}
const getProdutBySellerController = async(req:Request,res:Response,next:NextFunction) : Promise<IProduct[] | any > =>{
    try {
        const {accesstoken} = req.headers;
        // console.log(accesstoken,'jsttt')
        // @ts-ignore
        const userId = await jwt.verify(accesstoken,config.ACCESSTOKEN as Secret)
        console.log(userId,'jst')
        const options = req.query
        const result = await productService.getProdutBySeller(userId.email,options);
        res.status(200).send({
        action : true,
        result
    })
    } catch (error) {
        GlobalError(error,req,res,next) 
    }
}
const getAllByCategory = async(req:Request,res:Response,next:NextFunction) : Promise<IProduct[] | any > =>{
    try {
        const id = parseInt(req.params.id);
        const options = req.query
    const result = await productService.getAllByCategory(id,options);
    res.status(200).send({
        action : true,
        result
    })
    } catch (error) {
        GlobalError(error,req,res,next) 
    }
}

const deleteProductController = async(req:Request,res:Response,next:NextFunction) : Promise<IProduct[] | any > =>{
    try {
        const id = parseInt(req.params.id);
        console.log(id,'from delted')
       
    const result = await productService.deleteProduct(id);
    res.status(200).send({
        action : true,
        result
    })
    } catch (error) {
        GlobalError(error,req,res,next) 
    }
}
const updateProductController = async(req:Request,res:Response,next:NextFunction) : Promise<IProduct[] | any > =>{
    try {
        const id = parseInt(req.params.id);
        const updateInfo = req.body
    const result = await productService.updateProduct(id,updateInfo);
    res.status(200).send({
        action : true,
        result
    })
    } catch (error) {
        GlobalError(error,req,res,next) 
    }
}
const getTwoPoductOfEachCategoryController = async(req:Request,res:Response,next:NextFunction) : Promise<IProduct[] | any > =>{
    try {
        const result = await productService.getTwoPoductOfEachCategory();
        res.status(200).send({
            action : true,
            result
        })
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}

export const productController = {
    createProdutController,
    getAllProduct,
    getSingleProductController,
    getProdutBySellerController,
    getAllByCategory,
    deleteProductController,
    updateProductController,
    getTwoPoductOfEachCategoryController
}
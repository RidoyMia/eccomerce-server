

import { NextFunction,Request,Response } from "express";
import { Ireview } from "./Review.interface";
import { GlobalError } from "../../../gobalError/GlobalError";
import { ReviewService } from "./Review.service";


const createProductController = async(req:Request,res:Response,next:NextFunction) : Promise<Ireview | any> =>{
    try {
        const reviewInfo = req.body;
        const result = await ReviewService.createReview(reviewInfo);
        res.status(200).send({
            action : true,
            result
        })
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}
const deleteReviewController = async(req:Request,res:Response,next:NextFunction) : Promise<Ireview | any> =>{
    try {
        const id = parseInt(req.params.id)
        const result = await ReviewService.deleteReview(id);
        res.status(200).send({
            action : true,
            result
        })
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}
const updateReviwController = async(req:Request,res:Response,next:NextFunction) : Promise<Ireview | any> =>{
    try {
        const id = parseInt(req.params.id)
        const updateInfo = req.body;
        const result = await ReviewService.updateReviw(id,updateInfo);
        res.status(200).send({
            action : true,
            result
        })
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}
const getAllReviewByProductIdController = async(req:Request,res:Response,next:NextFunction) : Promise<Ireview | any> =>{
    try {
        const id = parseInt(req.params.id)
        const result = await ReviewService.getAllReviewByProductId(id);
        res.status(200).send({
            action : true,
            result
        })
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}

export const reviewController = {
    createProductController,
    deleteReviewController,
    updateReviwController,
    getAllReviewByProductIdController
}
import { PrismaPromise } from "@prisma/client";
import { prisma } from "../../../prisma/Prisma";
import { Ireview } from "./Review.interface";

const createReview = async(ReviewInfo : Ireview) : Promise<Ireview | any> =>{
    const result = await prisma.review.create({
        data : ReviewInfo
    })
    return result
}

const deleteReview = async(id : number) : Promise<Ireview | any> =>{
    const result = await prisma.review.delete({
        where : {
            id
        }
    });
    return result
}

const updateReviw = async(id : number,data : Partial<Ireview>) : Promise<Ireview | any> =>{
    const result = await prisma.review.update({
        where:{
            id
        },data
    })
}


const getAllReviewByProductId = async(id : number) : Promise<Ireview[] | any> =>{
    const result = await prisma.review.findMany({
        
        where : {
            productId : id
        },
        include : {
            user : true
        
        }
    })
    return result
}
const getAllReviewOFEachSeller= async(email:string) : Promise<Ireview[] | any > =>{
  const result = await prisma.review.findMany({
    where : {
        product : {
            author : {
                email : email
            }
        }
    }
  })
  return result
}

export const ReviewService = {
    createReview,
    deleteReview,
    updateReviw,
    getAllReviewByProductId,
    getAllReviewOFEachSeller
}
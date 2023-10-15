import { GlobalError } from "../../../gobalError/GlobalError";
import { prisma } from "../../../prisma/Prisma";
import { Iseller } from "./Seller.interface";
import bcrypt from "bcrypt"

const createSeller = async(sellerInfo:Iseller) : Promise<Iseller | any>=>{
    const result = await prisma.seller.create({
        data : sellerInfo
    })
    return result
}
const signupSeller = async(options:any) : Promise<Iseller | any> =>{
    const result = await prisma.$transaction(async(trans)=>{
        const isUserExist = await trans.seller.findUnique({
            where : {
                email : options?.email
            }
        });
        if(isUserExist){
           const isPassMatch = await bcrypt.compare(options.password, isUserExist?.password);
           if(isPassMatch){
            return isUserExist
           }
        }
        
      
    })
    return result
}
const getAllSeller = async(options : any) : Promise<Iseller[] | any> =>{
    const{page=1,searchText= ""} = options
    const skipping = (parseInt(page) -1 ) * 10
    const result = await prisma.seller.findMany({
        take : 10,
        skip : skipping,
        where : {
              OR : [
                  {
                 name : {
                    contains : searchText,
                    mode : 'insensitive'
                 } ,
                 email : {
                    contains : searchText,
                    mode : 'insensitive'
                 },
                 country : {
                    contains : searchText,
                    mode : 'insensitive'
                 },
                 divission : {
                    contains : searchText,
                    mode : 'insensitive'
                 }
                 }
              ]
        }
    })
    return result
}
const getSingleSeller = async(id : number) : Promise<Iseller | any> =>{
    const result = await prisma.seller.findUnique({
        where : {
            id
        }
    })
}
const deleteSeller = async(id : number) : Promise<Iseller | any> =>{
    const result = await prisma.seller.delete({
        where : {
            id
        }
    })
}
const updateSeler = async(id : number,data : any) :Promise<Partial<Iseller> | any> =>{
    const result = await prisma.seller.update({
        where : {
            id
        },
        data
    })
}


export const sellerService = {
    createSeller,
    getAllSeller,
    getSingleSeller,
    deleteSeller,
    updateSeler,
    signupSeller
}
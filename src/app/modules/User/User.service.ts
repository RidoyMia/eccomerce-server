import { Prisma } from "@prisma/client";
import { prisma } from "../../../prisma/Prisma";
import { Iuser } from "./User.interface";

const createUserService = async(UserData : Iuser) : Promise<Iuser | any> =>{
    const result = await prisma.user.create({
        data : UserData
    })
    return result
}
const getAllUserService = async(options : any) : Promise<Iuser[] | any> =>{
    const {page=1} = options;
    const skipping = (parseInt(page) -1 ) * 10
      const result = await prisma.user.findMany({
        skip : skipping,
        take : 10
      })
      const total = await prisma.user.count()
      return {
        total,
        result
      }
}


const deleteUserService = async(id : number) :Promise<Iuser | any> =>{

  const result = await prisma.user.delete({
    where : {
        id : id
    }
  })
}


export const userService = {
    createUserService,
    getAllUserService,
    deleteUserService
}
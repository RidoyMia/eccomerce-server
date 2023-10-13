import { prisma } from "../../../prisma/Prisma";
import { Icategory } from "./category.interFace";

const createCategory = async(category : Icategory):Promise<Icategory | any> =>{
  const result = await prisma.category.create({
    data : category
  })  
  return result  

}

const getAllcategory = async():Promise<Icategory[] | any> =>{
    const result = await prisma.category.findMany()
    return result
}

import { prisma } from "../../../prisma/Prisma";
import { Icategory } from "./category.interFace";



const createCategoryService = async(data:Icategory):Promise<Icategory | any> =>{
  const result = await prisma.category.createMany({
    data : data
 
 
 
 
 
  })  
  return result  

}

const getAllCategoryService = async(options:any):Promise<Icategory[] | any> =>{
  const {page=1} = options;
  const skipping = (parseInt(page) -1 ) * 10
    const result = await prisma.category.findMany({
      skip : skipping,
      take : 10
    })
    const total = await prisma.category.count()
    return {
      total,
      result
    }
}

const deleteCategoryService = async(id : number) : Promise<Icategory | any> =>{
  const result = await prisma.category.delete({
    where : {
       id
    }
  })
  return result

}

const updateCategoryService = async(id : number,data : Icategory) : Promise<Icategory | any > =>{
  const result = await prisma.category.update({
    where : {
      id
    },data 
  })
  return result
}


export const CategoryService = {
  createCategoryService,
  getAllCategoryService,
  deleteCategoryService,
  updateCategoryService

}
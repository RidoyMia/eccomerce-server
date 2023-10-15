 import express,{NextFunction, Request,Response} from "express"
import { Icategory } from "./category.interFace";
import { CategoryService } from "./categoryService";
import { ok } from "assert";
import { GlobalError } from "../../../gobalError/GlobalError";

const createCategoryController = async(req:Request,res:Response,next:NextFunction): Promise<Icategory | any> =>{
try {
    const categoryData = req.body;
    const result = await CategoryService.createCategoryService(categoryData);
    res.status(200).send({
        action : true,
        result
    })

    
} catch (error:any) {
    GlobalError(error,req,res,next)
}
}

const getAllcategoryController = async(req:Request,res:Response,next:NextFunction):Promise<Icategory[] | any> =>{
  try {
    const options = req.query;
   
    const result = await CategoryService.getAllCategoryService(options);
    res.status(200).send({
        action : true,
        result
    })
    
  } catch (error) {
    GlobalError(error,req,res,next)
  }
}
const deleteCategoryController = async(req:Request,res:Response,next:NextFunction):Promise<Icategory[] | any> =>{
    try {
      const {id} = req.params;
      const idWithNumber = parseInt(id)
      const result = await CategoryService.deleteCategoryService(idWithNumber);
      res.status(200).send({
          action : true,
          result
      })
      
    } catch (error) {
      GlobalError(error,req,res,next)
    }
  }
  const updateCategoryController = async(req:Request,res:Response,next:NextFunction):Promise<Icategory[] | any> =>{
    try {
        const id = req.params.id
        const idWithNumber = parseInt(id)
      const data = req.body;
      const result = await CategoryService.updateCategoryService(idWithNumber,data);
      res.status(200).send({
          action : true,
          result
      })
      
    } catch (error) {
      GlobalError(error,req,res,next)
    }
  }


export const categoryController = {
    createCategoryController,
    getAllcategoryController,
    deleteCategoryController,
    updateCategoryController
}
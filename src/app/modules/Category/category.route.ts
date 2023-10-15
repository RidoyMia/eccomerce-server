import express from "express"
import { categoryController } from "./category.controller";

const categoryRouter = express.Router();

categoryRouter.post('/create',categoryController.createCategoryController)
categoryRouter.get('/getAll',categoryController.getAllcategoryController)
categoryRouter.patch('/update/:id',categoryController.updateCategoryController)
categoryRouter.delete('/:id',categoryController.deleteCategoryController)


export default categoryRouter
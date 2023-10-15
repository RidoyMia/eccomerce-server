// createProdutController,
//     getAllProduct,
//     getSingleProductController,
//     getProdutBySellerController,
//     getAllByCategory,
//     deleteProductController,
//     updateProductController

import express from "express"
import { productController } from "./Product.controller";
const productRouter = express.Router();
productRouter.post('/create',productController.createProdutController)
productRouter.get('/All',productController.getAllProduct)
productRouter.get('/seller/:id',productController.getProdutBySellerController)
productRouter.get('/category/:id',productController.getAllByCategory)
productRouter.delete('/:id',productController.deleteProductController)
productRouter.patch('/:id',productController.updateProductController)
productRouter.get('/:id',productController.getSingleProductController)

export default productRouter;
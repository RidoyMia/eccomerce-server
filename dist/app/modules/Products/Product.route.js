"use strict";
// createProdutController,
//     getAllProduct,
//     getSingleProductController,
//     getProdutBySellerController,
//     getAllByCategory,
//     deleteProductController,
//     updateProductController
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Product_controller_1 = require("./Product.controller");
const productRouter = express_1.default.Router();
productRouter.post('/create', Product_controller_1.productController.createProdutController);
productRouter.get('/All', Product_controller_1.productController.getAllProduct);
productRouter.get('/features', Product_controller_1.productController.getTwoPoductOfEachCategoryController);
productRouter.get('/seller/:id', Product_controller_1.productController.getProdutBySellerController);
productRouter.get('/category/:id', Product_controller_1.productController.getAllByCategory);
productRouter.delete('/:id', Product_controller_1.productController.deleteProductController);
productRouter.patch('/:id', Product_controller_1.productController.updateProductController);
productRouter.get('/:id', Product_controller_1.productController.getSingleProductController);
exports.default = productRouter;

"use strict";
// createProduct,
//     getAllProduct,
//     getSingleProduct,
//     getProdutBySeller,
//     getAllByCategory,
//     deleteProduct,
//     updateProduct
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const GlobalError_1 = require("../../../gobalError/GlobalError");
const Product_service_1 = require("./Product.service");
const createProdutController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productInfo = req.body;
        const result = yield Product_service_1.productService.createProduct(productInfo);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const getAllProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const options = req.query;
        const result = yield Product_service_1.productService.getAllProduct(options);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const getSingleProductController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const result = yield Product_service_1.productService.getSingleProduct(id);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const getProdutBySellerController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const options = req.query;
        const result = yield Product_service_1.productService.getProdutBySeller(id, options);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const getAllByCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const options = req.query;
        const result = yield Product_service_1.productService.getAllByCategory(id, options);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const deleteProductController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const options = req.query;
        const result = yield Product_service_1.productService.deleteProduct(id);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const updateProductController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const updateInfo = req.body;
        const result = yield Product_service_1.productService.updateProduct(id, updateInfo);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const getTwoPoductOfEachCategoryController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Product_service_1.productService.getTwoPoductOfEachCategory();
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
exports.productController = {
    createProdutController,
    getAllProduct,
    getSingleProductController,
    getProdutBySellerController,
    getAllByCategory,
    deleteProductController,
    updateProductController,
    getTwoPoductOfEachCategoryController
};

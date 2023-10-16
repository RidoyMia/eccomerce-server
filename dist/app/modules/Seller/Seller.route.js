"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Seller_controller_1 = require("./Seller.controller");
// createSellerControler,
//     getAllSellerController,
//     getSingleSellerController,
//     deleteSellerController,
//     SingupSellerController,
//     sellerUpdateController
const sellerRouter = express_1.default.Router();
sellerRouter.post('/create', Seller_controller_1.SellerController.createSellerControler);
sellerRouter.get('/All', Seller_controller_1.SellerController.getAllSellerController);
sellerRouter.get('/login', Seller_controller_1.SellerController.SingupSellerController);
sellerRouter.patch('/:id', Seller_controller_1.SellerController.sellerUpdateController);
sellerRouter.get('/:id', Seller_controller_1.SellerController.getSingleSellerController);
sellerRouter.delete('/:id', Seller_controller_1.SellerController.deleteSellerController);
exports.default = sellerRouter;

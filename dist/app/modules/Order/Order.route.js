"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Order_controller_1 = require("./Order.controller");
const orderRouter = express_1.default.Router();
orderRouter.post('/create', Order_controller_1.orderController.createOrderController);
orderRouter.get('/seller', Order_controller_1.orderController.getOrderOfEachSeller);
orderRouter.get('/user', Order_controller_1.orderController.getAllOrderOfUserController);
orderRouter.get('/admin', Order_controller_1.orderController.getOrderByMonthController);
orderRouter.delete('/:id', Order_controller_1.orderController.deletedOrderController);
exports.default = orderRouter;

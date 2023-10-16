"use strict";
// createOrder,
// getAllOrderOfUser,
// getOrdersByMonthYear,
// deletedOrder
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
exports.orderController = void 0;
const GlobalError_1 = require("../../../gobalError/GlobalError");
const Order_service_1 = require("./Order.service");
const createOrderController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderInfo = req.body;
        const result = yield Order_service_1.orderService.createOrder(orderInfo);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const getAllOrderOfUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //    try {
    //     const accesstoken = req.header;
    //     const userInfo = await jwt.verify(accesstoken,config.ACCESSTOKEN as Secret)
    //     if(!userInfo){
    //         GlobalError("accesstoken not valid",req,res,next)
    //     }
    //     else{
    //         const result = await orderService.getAllOrderOfUser(userInfo.email);
    //         res.status(200).send({
    //             action : true,
    //             result
    //         })
    //     }
    //    } catch (error) {
    //     GlobalError(error,req,res,next)
    //    }
});
const getOrderByMonthController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // try {
    //     const accesstoken = req.header;
    // const userInfo = await jwt.verify(accesstoken,config.ACCESSTOKEN as Secret)
    // if(userInfo.role != "admin"){
    //     GlobalError("accesstoken not valid",req,res,next)
    // }
    // else{
    //     const result = await orderService.getOrdersByMonthYear();
    //     res.status(200).send({
    //         action : true,
    //         result
    //     })
    // }
    // } catch (error) {
    //     GlobalError(error,req,res,next)
    // }
});
const deletedOrderController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const result = yield Order_service_1.orderService.deletedOrder(id);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
exports.orderController = {
    createOrderController,
    getAllOrderOfUserController,
    getOrderByMonthController,
    deletedOrderController
};

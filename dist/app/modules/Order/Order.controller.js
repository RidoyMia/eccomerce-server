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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const GlobalError_1 = require("../../../gobalError/GlobalError");
const Order_service_1 = require("./Order.service");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const envpath_1 = require("../../../config/envpath");
const createOrderController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderInfo = req.body;
        console.log(orderInfo, 'order info');
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
    try {
        const { accesstoken } = req.headers;
        //@ts-ignore
        const userInfo = yield jsonwebtoken_1.default.verify(accesstoken, envpath_1.config.ACCESSTOKEN);
        if (!userInfo) {
            (0, GlobalError_1.GlobalError)("accesstoken not valid", req, res, next);
        }
        else {
            //@ts-ignore
            const result = yield Order_service_1.orderService.getAllOrderOfUser(userInfo.email);
            res.status(200).send({
                action: true,
                result
            });
        }
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
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
const getOrderOfEachSeller = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { accesstoken } = req.headers;
        console.log(accesstoken, 'tokennt');
        // @ts-ignore
        const userInfo = yield jsonwebtoken_1.default.verify(accesstoken, envpath_1.config.ACCESSTOKEN);
        //@ts-ignore
        const result = yield Order_service_1.orderService.getOrderOfEachSeller(userInfo === null || userInfo === void 0 ? void 0 : userInfo.email);
        console.log(result, 'result');
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const deletedOrderController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        //@ts-ignore
        const { email } = req.headers;
        console.log(id, email, 'd');
        //@ts-ignore
        const result = yield Order_service_1.orderService.deletedOrder(id, email);
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
    deletedOrderController,
    getOrderOfEachSeller
};

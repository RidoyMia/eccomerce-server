"use strict";
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
exports.orderService = void 0;
const Prisma_1 = require("../../../prisma/Prisma");
const createOrder = (orderInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.$transaction((tran) => __awaiter(void 0, void 0, void 0, function* () {
        const ordered = yield tran.order.create({
            data: orderInfo
        });
        const findProductAndUpdateQuantity = yield tran.product.update({
            where: {
                id: orderInfo.productId
            }, data: {
                quantity: {
                    decrement: ordered.quantity
                }
            }
        });
    }));
    return result;
});
const getAllOrderOfUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.order.findMany({
        include: {
            user: true
        },
        where: {
            user: {
                email: email
            }
        },
    });
    return result;
});
const getOrdersByMonthYear = () => __awaiter(void 0, void 0, void 0, function* () {
    const ordersByMonthYear = yield Prisma_1.prisma.$queryRaw `
  SELECT
    EXTRACT(MONTH FROM "createdAt") AS "month",
    EXTRACT(YEAR FROM "createdAt") AS "year",
    COUNT(*) AS "count",
    SUM("quantity") AS "totalQuantity"
  FROM "Order"
  GROUP BY "year", "month"
`;
    return ordersByMonthYear;
});
const deletedOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.$transaction((tran) => __awaiter(void 0, void 0, void 0, function* () {
        const findOrderHistory = yield tran.order.findFirst({
            where: {
                productId: id
            }
        });
        const updateQuantity = yield tran.product.update({
            where: {
                id
            },
            data: {
                quantity: {
                    increment: findOrderHistory === null || findOrderHistory === void 0 ? void 0 : findOrderHistory.quantity
                }
            }
        });
    }));
    return result;
});
exports.orderService = {
    createOrder,
    getAllOrderOfUser,
    getOrdersByMonthYear,
    deletedOrder
};

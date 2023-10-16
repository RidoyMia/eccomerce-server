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
exports.userService = void 0;
const Prisma_1 = require("../../../prisma/Prisma");
const createUserService = (UserData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.user.create({
        data: UserData
    });
    return result;
});
const signupUserService = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const isAdmin = yield Prisma_1.prisma.admin.findFirst({
        where: {
            email: email
        }
    });
    if (isAdmin) {
        return isAdmin;
    }
    else if (!isAdmin) {
        const isSeller = yield Prisma_1.prisma.seller.findFirst({
            where: {
                email: email
            }
        });
        if (isSeller) {
            return isSeller;
        }
        else if (!isSeller) {
            const isUser = yield Prisma_1.prisma.user.findFirst({
                where: {
                    email: email
                }
            });
            return isUser;
        }
    }
});
const getAllUserService = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const { page = 1 } = options;
    const skipping = (parseInt(page) - 1) * 10;
    const result = yield Prisma_1.prisma.user.findMany({
        skip: skipping,
        take: 10
    });
    const total = yield Prisma_1.prisma.user.count();
    return {
        total,
        result
    };
});
const deleteUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.user.delete({
        where: {
            id: id
        }
    });
});
exports.userService = {
    createUserService,
    getAllUserService,
    deleteUserService,
    signupUserService
};

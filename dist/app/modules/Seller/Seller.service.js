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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellerService = void 0;
const Prisma_1 = require("../../../prisma/Prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const createSeller = (sellerInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.seller.create({
        data: sellerInfo
    });
    return result;
});
const signupSeller = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.$transaction((trans) => __awaiter(void 0, void 0, void 0, function* () {
        const isUserExist = yield trans.seller.findUnique({
            where: {
                email: options === null || options === void 0 ? void 0 : options.email
            }
        });
        if (isUserExist) {
            const isPassMatch = yield bcrypt_1.default.compare(options.password, isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.password);
            if (isPassMatch) {
                return isUserExist;
            }
        }
    }));
    return result;
});
const getAllSeller = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const { page = 1, searchText = "" } = options;
    const skipping = (parseInt(page) - 1) * 10;
    const result = yield Prisma_1.prisma.seller.findMany({
        take: 10,
        skip: skipping,
        where: {
            OR: [
                {
                    name: {
                        contains: searchText,
                        mode: 'insensitive'
                    },
                    email: {
                        contains: searchText,
                        mode: 'insensitive'
                    },
                    country: {
                        contains: searchText,
                        mode: 'insensitive'
                    },
                    divission: {
                        contains: searchText,
                        mode: 'insensitive'
                    }
                }
            ]
        }
    });
    return result;
});
const getSingleSeller = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.seller.findUnique({
        where: {
            id
        }
    });
});
const deleteSeller = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.seller.delete({
        where: {
            id
        }
    });
});
const updateSeler = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.seller.update({
        where: {
            id
        },
        data
    });
});
exports.sellerService = {
    createSeller,
    getAllSeller,
    getSingleSeller,
    deleteSeller,
    updateSeler,
    signupSeller
};

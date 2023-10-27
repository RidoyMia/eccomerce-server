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
exports.ReviewService = void 0;
const Prisma_1 = require("../../../prisma/Prisma");
const createReview = (ReviewInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.review.create({
        data: ReviewInfo
    });
    return result;
});
const deleteReview = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.review.delete({
        where: {
            id
        }
    });
    return result;
});
const updateReviw = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.review.update({
        where: {
            id
        }, data
    });
});
const getAllReviewByProductId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.review.findMany({
        where: {
            productId: id
        },
        include: {
            user: true
        }
    });
    return result;
});
const getAllReviewOFEachSeller = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.review.findMany({
        where: {
            product: {
                author: {
                    email: email
                }
            }
        }
    });
    return result;
});
exports.ReviewService = {
    createReview,
    deleteReview,
    updateReviw,
    getAllReviewByProductId,
    getAllReviewOFEachSeller
};

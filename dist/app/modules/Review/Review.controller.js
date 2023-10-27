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
exports.reviewController = void 0;
const GlobalError_1 = require("../../../gobalError/GlobalError");
const Review_service_1 = require("./Review.service");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const envpath_1 = require("../../../config/envpath");
const createProductController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviewInfo = req.body;
        console.log(reviewInfo, 'reviewsss');
        const result = yield Review_service_1.ReviewService.createReview(reviewInfo);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const getAllReviewOFEachSellerController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { accesstoken } = req.headers;
        //@ts-ignore
        const sellerInfo = yield jsonwebtoken_1.default.verify(accesstoken, envpath_1.config.ACCESSTOKEN);
        //@ts-ignore
        const result = yield Review_service_1.ReviewService.getAllReviewOFEachSeller(sellerInfo === null || sellerInfo === void 0 ? void 0 : sellerInfo.email);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const deleteReviewController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const result = yield Review_service_1.ReviewService.deleteReview(id);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const updateReviwController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const updateInfo = req.body;
        const result = yield Review_service_1.ReviewService.updateReviw(id, updateInfo);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const getAllReviewByProductIdController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        console.log(id, 'si');
        const result = yield Review_service_1.ReviewService.getAllReviewByProductId(id);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
exports.reviewController = {
    createProductController,
    deleteReviewController,
    updateReviwController,
    getAllReviewByProductIdController,
    getAllReviewOFEachSellerController
};

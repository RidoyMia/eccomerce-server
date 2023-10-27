"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Review_controller_1 = require("./Review.controller");
const reviewRouter = express_1.default.Router();
reviewRouter.post('/create', Review_controller_1.reviewController.createProductController);
reviewRouter.get('/seller', Review_controller_1.reviewController.getAllReviewOFEachSellerController);
reviewRouter.delete('/:id', Review_controller_1.reviewController.deleteReviewController);
reviewRouter.patch('/:id', Review_controller_1.reviewController.updateReviwController);
reviewRouter.get('/:id', Review_controller_1.reviewController.getAllReviewByProductIdController);
exports.default = reviewRouter;

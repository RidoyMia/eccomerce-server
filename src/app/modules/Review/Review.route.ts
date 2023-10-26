

import express from "express"
import { reviewController } from "./Review.controller";
const reviewRouter = express.Router()

reviewRouter.post('/create',reviewController.createProductController)
reviewRouter.get('/seller',reviewController.getAllReviewOFEachSellerController)
reviewRouter.delete('/:id',reviewController.deleteReviewController)
reviewRouter.patch('/:id',reviewController.updateReviwController)
reviewRouter.get('/:id',reviewController.getAllReviewByProductIdController)


export default reviewRouter;


import express from "express"
import { reviewController } from "./Review.controller";
const reviewRouter = express.Router()

reviewRouter.post('/create',reviewController.createProductController)
reviewRouter.delete('/:id',reviewController.deleteReviewController)
reviewRouter.patch('/:id',reviewController.updateReviwController)
reviewRouter.post('/product/:id',reviewController.getAllReviewByProductIdController)


export default reviewRouter;
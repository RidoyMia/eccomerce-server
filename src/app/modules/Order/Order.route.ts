import express from "express"
import { orderController } from "./Order.controller";

// createOrderController,
//     getAllOrderOfUserController,
//     getOrderByMonthController,
//     deletedOrderController
const orderRouter = express.Router()
orderRouter.post('/create',orderController.createOrderController)
orderRouter.get('/user',orderController.getAllOrderOfUserController)
orderRouter.get('/admin',orderController.getOrderByMonthController)
orderRouter.delete('/:id',orderController.deletedOrderController)


export default orderRouter;
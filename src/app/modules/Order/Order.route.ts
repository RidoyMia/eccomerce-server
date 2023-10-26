import express from "express"
import { orderController } from "./Order.controller";


const orderRouter = express.Router()
orderRouter.post('/create',orderController.createOrderController)
orderRouter.get('/seller',orderController.getOrderOfEachSeller)
orderRouter.get('/user',orderController.getAllOrderOfUserController)
orderRouter.get('/admin',orderController.getOrderByMonthController)
orderRouter.delete('/:id',orderController.deletedOrderController)


export default orderRouter;
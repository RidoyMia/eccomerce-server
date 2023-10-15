import express from "express"
import { SellerController } from "./Seller.controller";
// createSellerControler,
//     getAllSellerController,
//     getSingleSellerController,
//     deleteSellerController,
//     SingupSellerController,
//     sellerUpdateController
const sellerRouter = express.Router()
sellerRouter.post('/create',SellerController.createSellerControler)
sellerRouter.get('/All',SellerController.getAllSellerController)
sellerRouter.get('/login',SellerController.SingupSellerController)
sellerRouter.patch('/:id',SellerController.sellerUpdateController)
sellerRouter.get('/:id',SellerController.getSingleSellerController)
sellerRouter.delete('/:id',SellerController.deleteSellerController)


export default sellerRouter;
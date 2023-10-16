
import express, { Application ,NextFunction,Request,Response} from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import { PrismaClient } from "@prisma/client"
import { GlobalError } from "./gobalError/GlobalError"
import categoryRouter from "./app/modules/Category/category.route"
import UserRouter from "./app/modules/User/User.route"
import sellerRouter from "./app/modules/Seller/Seller.route"
import productRouter from "./app/modules/Products/Product.route"
import reviewRouter from "./app/modules/Review/Review.route"
import orderRouter from "./app/modules/Order/Order.route"

const app:Application = express()
app.use(cookieParser())
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended : true}))

const prisma =new PrismaClient()


app.use("/api/v1/category",categoryRouter)
app.use("/api/v1/user",UserRouter)
app.use("/api/v1/seller",sellerRouter)
app.use("/api/v1/product",productRouter)
app.use("/api/v1/review",reviewRouter)
app.use("/api/v1/order",orderRouter)
app.get('/',async(req:Request,res:Response)=>{
   
    res.send({
        "good" : "doog"
    })
})
app.use(GlobalError)
app.use((req:Request,res:Response)=>{
    res.send({
        message : "route not found",
    })
    console.log('ami')
})

export default app;
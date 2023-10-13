
import express, { Application ,NextFunction,Request,Response} from "express"
import cors from "cors"
import { PrismaClient } from "@prisma/client"
import { GlobalError } from "./gobalError/GlobalError"

const app:Application = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended : true}))

const prisma =new PrismaClient()
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

import { PrismaClient } from "@prisma/client"
import app from "./app"
import { config } from "./config/envpath"
const port = 6000
const prisma = new PrismaClient()
async function bootstrap(){
  app.listen(config.port,()=>{
     console.log(`port is running ${config.port}`)
  })
  

}
bootstrap()
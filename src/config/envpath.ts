import dotenv from "dotenv"
import path from "path"

dotenv.config({path : path.join(process.cwd(),'.env')})


export const  config  = {
   port : process.env.PORT,
   Salt : process.env.RoundSalt,
   REFRESHTOKEN_EXP : process.env.REFRESHTOKEN_EXP,
   REFRESHTOKEN : process.env.REFRESHTOKEN,
   ACCESSTOKEN_EXP : process.env.ACCESSTOKEN_EXP,
   ACCESSTOKEN : process.env.ACCESSTOKEN
   
}
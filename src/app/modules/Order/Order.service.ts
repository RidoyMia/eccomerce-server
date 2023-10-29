import { prisma } from "../../../prisma/Prisma";
import { Iorder } from "./Order.interface";

const createOrder = async(orderInfo : Iorder) :Promise<Iorder | any> =>{

    const result = await prisma.$transaction(async(tran)=>{
        const ordered = await tran.order.create({
            data : orderInfo
        })

        const findProductAndUpdateQuantity = await tran.product.update({
            where :{
                id : orderInfo.productId
            } , data : {
                quantity : {
                    decrement : ordered.quantity
                }
            }
        }) 
    })
    return result
}

const getAllOrderOfUser = async(email : string) => {
    const result = await prisma.order.findMany({
        include : {
            user : true,
            product : true,
            
        },
        where : {
            user : {
                email : email
            }
        },
        
    })

    return result
}

const getOrderOfEachSeller = async(email : string) : Promise<Iorder[] | any> =>{
    console.log(email)
    const result = await prisma.$transaction(async(tran)=>{
        const orders = await tran.order.findMany({
            include : {
                product : true
            },
            where : {
                product : {
                    author :{
                        email : email
                    }
                }
            }
        })
        let Amount = 0
        if(orders.length >0){
                    for (let i = 0; i < orders.length; i++) {
                        const element = orders[i];
                        //@ts-ignore
                        const totalMoney = parseInt(element.product.price) * parseInt(element.quantity)
                        Amount = Amount + totalMoney
                        
                    }
                    
                }
       return {orders,Amount}       
              
    })
  
       
        
        
  
    return {result}
}


  

const getOrdersByMonthYear = async (): Promise<any> => {
    console.log('paici')
    const ordersByYearMonth = await prisma.$queryRaw`
    SELECT
      EXTRACT(YEAR FROM "createdAt")::integer AS year,
      EXTRACT(MONTH FROM "createdAt")::integer AS month,
      EXTRACT(DAY FROM "createdAt")::integer AS day,
      SUM("quantity")::integer AS total_quantity
    FROM
      "Order"
    GROUP BY
      year, month,day
    ORDER BY
      year, month;
  `;

  return ordersByYearMonth;
}
  
    
  
  
  
const deletedOrder =async (id:number,email : string):Promise<Iorder | any> => {
    console.log(id,email,'from delted service')
    const result = await prisma.$transaction(async(tran)=>{
        const findOrderHistory = await tran.order.findFirst({
            where : {
                  id : id,
                 user : {
                    email : email
                 }
            }
        })
         
        const updateQuantity = await tran.product.update({
            where : {
                  id : findOrderHistory?.productId 
            },
            data : {
                quantity : {
                    increment : findOrderHistory?.quantity
                }
            }
        })
        const deletedOrder = await tran.order.delete({
            where : {
                id : findOrderHistory?.id
            }
        })
        return deletedOrder

        
    })
    return result
}

export const orderService = {
    createOrder,
    getAllOrderOfUser,
    getOrdersByMonthYear,
    deletedOrder,
    getOrderOfEachSeller
}





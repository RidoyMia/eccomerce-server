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


  

const getOrdersByMonthYear = async (): Promise<any> => {
  const ordersByMonthYear =  await prisma.$queryRaw`
  SELECT
    EXTRACT(MONTH FROM "createdAt") AS "month",
    EXTRACT(YEAR FROM "createdAt") AS "year",
    COUNT(*) AS "count",
    SUM("quantity") AS "totalQuantity"
  FROM "Order"
  GROUP BY "year", "month"
`;

  return ordersByMonthYear;
};

const deletedOrder =async (id:number,email : string):Promise<Iorder | any> => {
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
    deletedOrder
}





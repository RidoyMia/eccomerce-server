import { prisma } from "../../../prisma/Prisma";
import { IProduct } from "./Products.interface";

const createProduct = async(productInfo : IProduct) : Promise<IProduct | any> =>{
    const result = await prisma.product.create({ data : productInfo})
    return result
}
const getAllProduct = async(options : any) : Promise<IProduct[] |any> =>{
    const {page = 1, searchText="",price='asc'} = options
    const skipping = (parseInt(page) -1 ) * 10
    const result = await prisma.product.findMany({
        skip : skipping,
        take : 10,
        include : {
            category : true,
            author : true,
            review : true,

        },
        where : {
            OR : [
                {
                    name : {
                        contains : searchText,
                        mode : 'insensitive'
                    },
                    category : {
                        name : {
                            contains : searchText,
                            mode : 'insensitive'
                        }
                    },
                    descriptions : {
                        contains : searchText,
                        mode : 'insensitive'
                    },
                    brand : {
                        contains : searchText,
                        mode : 'insensitive'
                    }
                }
            ],
            
        },
        orderBy : {
            price : price
        }
    })

    const total = await prisma.product.count();
    return {
        result,
        total
    }
}
const getSingleProduct = async(id : number) : Promise<IProduct | any> =>{
    const result = await prisma.product.findUnique({
        where : {
            id
        }
    })
    return result
}
const getProdutBySeller = async(id : number,options : any) : Promise<IProduct[] | any> =>{
    const {page = 1, searchText= "", sortBy='asc'} = options
    const skipping = (parseInt(page) -1 ) * 10
    const result = await prisma.product.findMany({
       skip : skipping,
       take : 10,
        where : {
            SellerId : id,
            AND : [
                {
                    OR : [
                        {
                            name : {
                                contains : searchText,
                                mode : 'insensitive'
                            },
                            descriptions : {
                                contains : searchText,
                                 mode : 'insensitive'
                            },
                            brand : {
                                contains : searchText,
                                mode : 'insensitive'
                            }
                        }
                    ]
                }
            ]
        },
        orderBy : {
            createdAt : sortBy
        }
    })
    const total = await prisma.product.count()
    return {
        total, result
    }
}

const getAllByCategory = async(id:number,options:any) :Promise<IProduct[] | any> =>{
    const {page = 1, searchText= "", sortBy='asc'} = options
    const skipping = (parseInt(page) -1 ) * 10
    const result = await prisma.product.findMany({
        take : 10,
        skip : skipping,
        include : {
            category : true,
            author : true,

        },
        where : {
            categoriID : id,
            AND : [
                {
                    OR : [
                        {
                            brand : {
                                contains : searchText,
                                mode : 'insensitive'
                            } ,
                            descriptions : {
                                contains : searchText,
                                mode : 'insensitive'
                            },
                            author : {
                                name : {
                                    contains : searchText,
                                    mode : 'insensitive'
                                }
                            },
                            name : {
                                contains : searchText,
                                mode : 'insensitive'
                            }
                        }
                        
                    ]
                }
            ]
        },
        orderBy : {
            createdAt : sortBy
        }
    });
    const total = await prisma.product.count()
    return {total,result}
}
const deleteProduct = async(id : number): Promise<IProduct | any> =>{
    const result = await prisma.product.delete({
        where : {
            id
        }
    });
    return result
}
const updateProduct = async(id : number,data : Partial<IProduct>) : Promise<Partial<IProduct> | any> =>{
    const result = await prisma.product.update({
        where : {
            id
        },
        data 
    })
    return result
}

export const productService = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    getProdutBySeller,
    getAllByCategory,
    deleteProduct,
    updateProduct



}


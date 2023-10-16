"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = void 0;
const Prisma_1 = require("../../../prisma/Prisma");
const createProduct = (productInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.product.create({ data: productInfo });
    return result;
});
const getAllProduct = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const { page = 1, searchText = "", price = 'asc' } = options;
    const skipping = (parseInt(page) - 1) * 10;
    const result = yield Prisma_1.prisma.product.findMany({
        skip: skipping,
        take: 10,
        include: {
            category: true,
            author: true,
            review: true,
        },
        where: {
            OR: [
                {
                    name: {
                        contains: searchText,
                        mode: 'insensitive'
                    },
                    category: {
                        name: {
                            contains: searchText,
                            mode: 'insensitive'
                        }
                    },
                    descriptions: {
                        contains: searchText,
                        mode: 'insensitive'
                    },
                    brand: {
                        contains: searchText,
                        mode: 'insensitive'
                    }
                }
            ],
        },
        orderBy: {
            price: price
        }
    });
    const total = yield Prisma_1.prisma.product.count();
    return {
        result,
        total
    };
});
const getSingleProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.product.findUnique({
        where: {
            id
        }
    });
    return result;
});
const getProdutBySeller = (id, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { page = 1, searchText = "", sortBy = 'asc' } = options;
    const skipping = (parseInt(page) - 1) * 10;
    const result = yield Prisma_1.prisma.product.findMany({
        skip: skipping,
        take: 10,
        where: {
            SellerId: id,
            AND: [
                {
                    OR: [
                        {
                            name: {
                                contains: searchText,
                                mode: 'insensitive'
                            },
                            descriptions: {
                                contains: searchText,
                                mode: 'insensitive'
                            },
                            brand: {
                                contains: searchText,
                                mode: 'insensitive'
                            }
                        }
                    ]
                }
            ]
        },
        orderBy: {
            createdAt: sortBy
        }
    });
    const total = yield Prisma_1.prisma.product.count();
    return {
        total, result
    };
});
const getAllByCategory = (id, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { page = 1, searchText = "", sortBy = 'asc' } = options;
    const skipping = (parseInt(page) - 1) * 10;
    const result = yield Prisma_1.prisma.product.findMany({
        take: 10,
        skip: skipping,
        include: {
            category: true,
            author: true,
        },
        where: {
            categoriID: id,
            AND: [
                {
                    OR: [
                        {
                            brand: {
                                contains: searchText,
                                mode: 'insensitive'
                            },
                            descriptions: {
                                contains: searchText,
                                mode: 'insensitive'
                            },
                            author: {
                                name: {
                                    contains: searchText,
                                    mode: 'insensitive'
                                }
                            },
                            name: {
                                contains: searchText,
                                mode: 'insensitive'
                            }
                        }
                    ]
                }
            ]
        },
        orderBy: {
            createdAt: sortBy
        }
    });
    const total = yield Prisma_1.prisma.product.count();
    return { total, result };
});
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.product.delete({
        where: {
            id
        }
    });
    return result;
});
const updateProduct = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.product.update({
        where: {
            id
        },
        data
    });
    return result;
});
exports.productService = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    getProdutBySeller,
    getAllByCategory,
    deleteProduct,
    updateProduct
};

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const client_1 = require("@prisma/client");
const GlobalError_1 = require("./gobalError/GlobalError");
const category_route_1 = __importDefault(require("./app/modules/Category/category.route"));
const User_route_1 = __importDefault(require("./app/modules/User/User.route"));
const Seller_route_1 = __importDefault(require("./app/modules/Seller/Seller.route"));
const Product_route_1 = __importDefault(require("./app/modules/Products/Product.route"));
const Review_route_1 = __importDefault(require("./app/modules/Review/Review.route"));
const Order_route_1 = __importDefault(require("./app/modules/Order/Order.route"));
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
const prisma = new client_1.PrismaClient();
app.use("/api/v1/category", category_route_1.default);
app.use("/api/v1/user", User_route_1.default);
app.use("/api/v1/seller", Seller_route_1.default);
app.use("/api/v1/product", Product_route_1.default);
app.use("/api/v1/review", Review_route_1.default);
app.use("/api/v1/order", Order_route_1.default);
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({
        "good": "doog"
    });
}));
app.use(GlobalError_1.GlobalError);
app.use((req, res) => {
    res.send({
        message: "route not found",
    });
    console.log('ami');
});
exports.default = app;

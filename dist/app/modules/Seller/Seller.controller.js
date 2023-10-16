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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerController = void 0;
// createSeller,
// getAllSeller,
// getSingleSeller,
// deleteSeller,
// updateSeler
// signupSeller
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Seller_service_1 = require("./Seller.service");
const bcrypt_1 = __importDefault(require("bcrypt"));
const GlobalError_1 = require("../../../gobalError/GlobalError");
const envpath_1 = require("../../../config/envpath");
const createSellerControler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sellerInfo = req.body;
        const hassignPassword = yield bcrypt_1.default.hash(sellerInfo.password, 12);
        sellerInfo.password = hassignPassword;
        const result = yield Seller_service_1.sellerService.createSeller(sellerInfo);
        const { password } = result, others = __rest(result, ["password"]);
        res.status(200).send({
            action: true,
            others
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const getAllSellerController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const options = req.query;
        const result = yield Seller_service_1.sellerService.getAllSeller(options);
        res.status(200).send({
            result,
            action: true
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const getSingleSellerController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const result = yield Seller_service_1.sellerService.getSingleSeller(id);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const deleteSellerController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const result = yield Seller_service_1.sellerService.deleteSeller(id);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const SingupSellerController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const useData = req.body;
        const result = yield Seller_service_1.sellerService.signupSeller(useData);
        const { password } = result, others = __rest(result, ["password"]);
        if (result) {
            const ACCESSTOKEN = yield jsonwebtoken_1.default.sign({ email: result.email, role: result.role }, envpath_1.config.ACCESSTOKEN, { expiresIn: envpath_1.config.ACCESSTOKEN_EXP });
            const REFRESHTOKEN = yield jsonwebtoken_1.default.sign({ email: result.email, role: result.role }, envpath_1.config.REFRESHTOKEN, { expiresIn: envpath_1.config.REFRESHTOKEN_EXP });
            res.cookie("REFRESHTOKEN", REFRESHTOKEN);
            res.status(200).send({
                action: true,
                others,
                ACCESSTOKEN
            });
        }
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const sellerUpdateController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const updateSelerInfo = req.body;
        const result = yield Seller_service_1.sellerService.updateSeler(id, updateSelerInfo);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
exports.SellerController = {
    createSellerControler,
    getAllSellerController,
    getSingleSellerController,
    deleteSellerController,
    SingupSellerController,
    sellerUpdateController
};

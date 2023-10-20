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
exports.UserController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const envpath_1 = require("../../../config/envpath");
const User_service_1 = require("./User.service");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const GlobalError_1 = require("../../../gobalError/GlobalError");
const createUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const hassingPassword = yield bcrypt_1.default.hash(userData.password, 12);
        userData.password = hassingPassword;
        console.log(userData, 'sss');
        const result = yield User_service_1.userService.createUserService(userData);
        console.log(result, 'resultttt');
        const { password } = result, others = __rest(result, ["password"]);
        if (result) {
            res.status(200).send({
                action: true,
                others
            });
        }
        //    
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const signupUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userInfo = req.body;
        const result = yield User_service_1.userService.signupUserService(userInfo.email);
        const { password } = result, others = __rest(result, ["password"]);
        const isMatchPassword = yield bcrypt_1.default.compare(userInfo.password, result.password);
        if (!isMatchPassword) {
            (0, GlobalError_1.GlobalError)("password does not match", req, res, next);
        }
        else {
            const ACCESSTOKEN = yield jsonwebtoken_1.default.sign({ email: result.email, role: result.role, userId: result.userId }, envpath_1.config.ACCESSTOKEN, { expiresIn: envpath_1.config.ACCESSTOKEN_EXP });
            const REFRESHTOKEN = yield jsonwebtoken_1.default.sign({ email: result.email, role: result.role, userId: result.userId }, envpath_1.config.REFRESHTOKEN, { expiresIn: envpath_1.config.REFRESHTOKEN_EXP });
            res.cookie("refreshToken", REFRESHTOKEN);
            res.status(200).send({
                action: true,
                ACCESSTOKEN,
                others
            });
        }
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
exports.UserController = {
    createUserController,
    signupUserController
};

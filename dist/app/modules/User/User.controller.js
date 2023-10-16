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
const User_service_1 = require("./User.service");
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
            //   const ACCESSTOKEN = await jwt.sign({email : result.email,role:result.role},config.ACCESSTOKEN as Secret, {expiresIn : config.ACCESSTOKEN_EXP})
            // const REFRESHTOKEN = await jwt.sign({email : result.email,role:result.role},config.REFRESHTOKEN as Secret, {expiresIn : config.REFRESHTOKEN_EXP})
            // res.cookie("refreshToken" , REFRESHTOKEN)
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
exports.UserController = {
    createUserController
};

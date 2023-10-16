"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
exports.config = {
    port: process.env.PORT,
    Salt: process.env.RoundSalt,
    REFRESHTOKEN_EXP: process.env.REFRESHTOKEN_EXP,
    REFRESHTOKEN: process.env.REFRESHTOKEN,
    ACCESSTOKEN_EXP: process.env.ACCESSTOKEN_EXP,
    ACCESSTOKEN: process.env.ACCESSTOKEN
};
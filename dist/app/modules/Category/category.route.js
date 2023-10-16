"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("./category.controller");
const categoryRouter = express_1.default.Router();
categoryRouter.post('/create', category_controller_1.categoryController.createCategoryController);
categoryRouter.get('/getAll', category_controller_1.categoryController.getAllcategoryController);
categoryRouter.patch('/update/:id', category_controller_1.categoryController.updateCategoryController);
categoryRouter.delete('/:id', category_controller_1.categoryController.deleteCategoryController);
exports.default = categoryRouter;

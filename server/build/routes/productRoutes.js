"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productscontroller_1 = __importDefault(require("../controllers/productscontroller"));
class ProductRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', productscontroller_1.default.list);
        this.router.get('/:id', productscontroller_1.default.getOne);
        this.router.post('/', productscontroller_1.default.create);
        this.router.put('/:id', productscontroller_1.default.update);
        this.router.delete('/:id', productscontroller_1.default.delete);
    }
}
const productRoutes = new ProductRoutes();
exports.default = productRoutes.router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexcontroller_1 = require("../controllers/indexcontroller");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexcontroller_1.indexController.index);
        this.router.get('/:id', indexcontroller_1.indexController.getOne);
        this.router.post('/', indexcontroller_1.indexController.create);
        this.router.put('/:id', indexcontroller_1.indexController.update);
        this.router.delete('/:id', indexcontroller_1.indexController.delete);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;

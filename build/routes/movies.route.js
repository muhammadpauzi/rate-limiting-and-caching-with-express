"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movies_controller_1 = require("../controllers/movies.controller");
const apicache_1 = __importDefault(require("apicache"));
const router = (0, express_1.Router)();
const moviesController = new movies_controller_1.MoviesController();
const cache = apicache_1.default.middleware;
router.get('/', cache('1 minutes'), (req, res) => moviesController.index(req, res));
exports.default = router;

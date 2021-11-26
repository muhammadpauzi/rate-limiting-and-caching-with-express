"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movies_route_1 = __importDefault(require("./routes/movies.route"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const app = (0, express_1.default)();
const port = 5000;
// middlewares
app.use((0, express_rate_limit_1.default)({
    windowMs: 10 * 60 * 1000,
    max: 5
}));
app.set('trust proxy', 1);
// routes
app.use('/api/movies', movies_route_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}....`);
});

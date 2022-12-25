"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv = require('dotenv');
dotenv.config();
const express_1 = __importDefault(require("express"));
const emoloyeeRoutes_1 = __importDefault(require("./routes/emoloyeeRoutes"));
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express_1.default.urlencoded({ extended: true }));
let source = process.env.DATABASE_URL;
//add mongoose
mongoose_1.default.connect(source)
    .then(() => app.listen(3001))
    .catch((err) => console.log(err));
app.use(express_1.default.json());
app.use(emoloyeeRoutes_1.default);

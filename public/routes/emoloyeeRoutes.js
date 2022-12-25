"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const emoloyeeControllers_1 = __importDefault(require("../controllers/emoloyeeControllers"));
let router = express_1.default.Router();
router.get('/view/system/users', emoloyeeControllers_1.default.viewAllUseer);
router.get('/users/:id', emoloyeeControllers_1.default.getIDUser);
router.get('/post/system/users', emoloyeeControllers_1.default.sendDataToUserToBrowser);
router.post('/r', emoloyeeControllers_1.default.addUserToDataBase);
router.delete('/users/:id', emoloyeeControllers_1.default.deleteUser);
exports.default = router;

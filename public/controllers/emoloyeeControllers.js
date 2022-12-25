"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employeeShema_1 = __importDefault(require("../models/employeeShema"));
const viewAllUseer = (req, res) => {
    employeeShema_1.default.find()
        .then((result) => {
        res.send(result);
    })
        .catch((err) => {
        console.log(err);
    });
};
const addUserToDataBase = async (req, res) => {
    const EmployeeShema = new employeeShema_1.default({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    });
    try {
        const es = await EmployeeShema.save();
        res.json(es);
    }
    catch (err) {
        console.log('Error');
    }
};
const deleteUser = (req, res) => {
    const id = req.params.id;
    employeeShema_1.default.findByIdAndDelete(id)
        .then(result => {
        res.send(result);
    })
        .catch(err => {
        console.log(err);
    });
};
exports.default = {
    viewAllUseer,
    deleteUser,
    addUserToDataBase
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employeeShema_1 = __importDefault(require("../models/employeeShema"));
const viewAllUseer = (req, res) => {
    employeeShema_1.default.find()
        .then((result) => {
        res.render('index', { title: 'All users', Users: result });
    })
        .catch((err) => {
        console.log(err);
    });
};
const getIDUser = (req, res) => {
    const id = req.params.id;
    employeeShema_1.default.findById(id)
        .then(result => {
        res.render('details', { user: result, title: 'userdata' });
    })
        .catch(err => {
        console.log(err);
    });
};
const sendDataToUserToBrowser = (req, res) => res.render('create');
const addUserToDataBase = (req, res) => {
    const EmployeeShema = new employeeShema_1.default({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    });
    EmployeeShema.save()
        .then((result) => {
        res.redirect('/post/system/users');
    })
        .catch((err) => {
        console.log(err);
    });
};
const deleteUser = (req, res) => {
    const id = req.params.id;
    employeeShema_1.default.findByIdAndDelete(id)
        .then(result => {
        res.json({ redirect: '/all' });
    })
        .catch(err => {
        console.log(err);
    });
};
exports.default = {
    viewAllUseer,
    getIDUser,
    deleteUser,
    addUserToDataBase,
    sendDataToUserToBrowser
};

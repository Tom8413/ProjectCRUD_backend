import employeeShema from '../models/employeeShema';
import {NextFunction, Request, Response} from 'express';
import mongoose from 'mongoose';



const viewAllUseer = (req:Request, res:Response) => {
    employeeShema.find()
    .then((result) => {
        res.render('index', {title: 'All users', Users: result });
    })
    .catch((err) => {
        console.log(err);
    })
};

const getIDUser = (req:Request, res:Response) => {
    const id = req.params.id;
    employeeShema.findById(id)
    .then(result => {
        res.render('details', {user: result, title: 'userdata'});
    })
    .catch(err => {
        console.log(err);
    })
};

const sendDataToUserToBrowser = (req:Request, res:Response) =>
    res.render('create');


const addUserToDataBase = (req: Request, res: Response) => {
    const EmployeeShema = new employeeShema({
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
    })

};

const deleteUser = (req:Request, res:Response) => {
    const id = req.params.id;

    employeeShema.findByIdAndDelete(id)
    .then(result => {
        res.json({redirect: '/all'});
    })
    .catch(err => {
        console.log(err);
    })
};

export default {
    viewAllUseer,
    getIDUser,
    deleteUser,
    addUserToDataBase,
    sendDataToUserToBrowser
};

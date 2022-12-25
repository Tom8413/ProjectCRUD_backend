import employeeShema from '../models/employeeShema';
import {NextFunction, Request, Response} from 'express';
import mongoose from 'mongoose';



const viewAllUseer = (req:Request, res:Response) => {
    employeeShema.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
};

const getIDUser = (req:Request, res:Response) => {
    const id = req.params.id;
    employeeShema.findById(id)
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        console.log(err);
    })
};

const sendDataToUserToBrowser = (req:Request, res:Response) =>
    res.render('create');


const addUserToDataBase = async(req: Request, res: Response) => {
    const EmployeeShema = new employeeShema({
        name: req.body.name, 
        password: req.body.password, 
        email: req.body.email
    });
    
    try{
        const es = await EmployeeShema.save()
        res.json(es);
    
    }catch(err) {
        console.log('Error');
    }

};

const deleteUser = (req:Request, res:Response) => {
    const id = req.params.id;

    employeeShema.findByIdAndDelete(id)
    .then(result => {
        res.send(result);
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

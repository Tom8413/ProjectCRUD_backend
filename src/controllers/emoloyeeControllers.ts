import employeeShema from '../models/employeeShema';
import {NextFunction, Request, Response} from 'express';
import mongoose from 'mongoose';



const viewAllUseer = (req:Request, res:Response) => {
    employeeShema.find()
    .then((result) => {
        res.status(200).send(result);
    })
    .catch((err) => {
        res.status(404).json({
            message: err.message
        });
    })
};

const addUserToDataBase = async(req: Request, res: Response) => {
    const EmployeeShema = new employeeShema({
        name: req.body.name, 
        password: req.body.password, 
        email: req.body.email
    });
    
    try{
        const es = await EmployeeShema.save()
        res.send(200).json(es);
    
    }catch(err) {
        res.status(500).send(err);
    };

};

const deleteUser = (req:Request, res:Response) => {
    const id = req.params.id;

    employeeShema.findByIdAndDelete(id)
    .then(result => {
        res.status(200).send({message: result + "User delete succesfuly"});
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

export default {
    viewAllUseer,
    deleteUser,
    addUserToDataBase
};

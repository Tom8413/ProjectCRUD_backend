import express from 'express';

import employeeControllers from'../controllers/emoloyeeControllers';
import employeeShema from '../models/employeeShema';


let router = express.Router();


router.get('/view/system/users', employeeControllers.viewAllUseer);
router.post('/r', employeeControllers.addUserToDataBase);
router.delete('/users/:id', employeeControllers.deleteUser);


export default router;
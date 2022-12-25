import express from 'express';

import employeeControllers from'../controllers/emoloyeeControllers';
import employeeShema from '../models/employeeShema';


let router = express.Router();


router.get('/view/system/users', employeeControllers.viewAllUseer);
router.get('/users/:id', employeeControllers.getIDUser);
router.get('/post/system/users', employeeControllers.sendDataToUserToBrowser);
router.post('/r', employeeControllers.addUserToDataBase);
router.delete('/users/:id', employeeControllers.deleteUser);


export default router;
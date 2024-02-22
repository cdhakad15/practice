// routes/staffRoutes.js
import express from "express";
import Staff from "../model/staff.model.js";
import { createStaff, deleteStaff, getAllStaff, getStaffById, updateStaff } from "../controllers/staff.controller.js";

const router = express.Router();



router.post('/create', createStaff);
router.get('/alldata', getAllStaff);
router.get('/data:id', getStaffById);
router.put('/updateStaff/:id', updateStaff);
router.delete('/deleteStaff/:id', deleteStaff);


export default router;


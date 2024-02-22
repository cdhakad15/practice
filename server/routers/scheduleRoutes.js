// routes/scheduleRoutes.js
import express from "express";
import Schedule from "../model/schedule.model.js"
import { createSchedule, deleteSchedule, getAllSchedules, getScheduleById, updateSchedule } from "../controllers/schedule.controller.js";


const router = express.Router();


router.post('/create', createSchedule);
router.get('/allData', getAllSchedules);
router.get('/data/:id', getScheduleById);
router.put('/update/:id', updateSchedule);
router.delete('/delete/:id', deleteSchedule);


export default router;
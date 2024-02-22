import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import staffRoutes from "./routers/staffRoutes.js";
import scheduleRoutes from "./routers/scheduleRoutes.js"

const app = express();
const PORT = 3000;
app.use(express.json())

app.use(cors());



mongoose.connect("mongodb://localhost:27017/shippings").then(()=>{
    console.log("DB connected successfully");

app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`);
});

}).catch(error=>console.log(error));

app.use('/staff', staffRoutes);
app.use('/schedule', scheduleRoutes);

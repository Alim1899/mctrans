const express = require("express");
const path = require('path');
const mongoose = require('mongoose');

const DataModel = require("./DataModel");
const connectDB = require("./Database");
connectDB();

const app = express();
app.use(express.json({extended:false}))

const cors = require('cors');
app.use(cors());

app.get("/readfromserver", async (req, res) => {
    try {
        // Assuming you want to fetch all data from DataModel
        const data = await DataModel.find();
        res.json(data);
    } catch (error) {
        console.error("Server error while reading data:", error);
        res.status(500).send("Server error while reading data");
    }
});
app.post("/writetodatabase",async(req,res)=>{
    try {
        const {content} = req.body;
        const newData = new DataModel({content});
        await newData.save();
        res.json({message:"Data saved succesfully"})
    } catch (error) {
        console.log("Server error while saving data");
        req.statusCode(500).send("Server error while saving data")
    }
})




const PORT = process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`server is running on PORT :${PORT}`)
})
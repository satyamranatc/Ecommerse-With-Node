import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import "dotenv/config"
import ProductModel from './models/Product.model.js';

const app = express();
// Environment variables
let PORT  = process.env.PORT || 5000;

//!----- Middlewares------
app.use(bodyParser.json());
app.use(cors());

//!------ Database configuration-----
const uri = process.env.MongoDB_URI;
mongoose.connect(uri)
console.log("Connection established")



//!------ Routing--------
//^ GET
app.get("/api/AllData",(req, res) => {
    res.json({
        message: "Hello World"
    });
});

//^ POST Login
app.post("/api/Login",(req, res) => {
    console.log(req.body);
    if(req.body.username == "admin" && req.body.password == "123")
    {
        res.json({
            status:true,
            message: "Successfully logged in"
        });
    
    }
    else
    {

        res.json({
            status:false,
            message: "Soory Login Failed"
        });
    }
});

//^ POST ProdutData
app.post("/api/SubmitProduct",(req, res) => {
    console.log(req.body);
});




//!--------- Server configuration----------
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

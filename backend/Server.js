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

//^ GET ProdutData
app.get("/api/ProductList",async (req, res) => {
    let allData = await ProductModel.find()
    res.json(allData)
})


//^ POST ProdutData
app.post("/api/SubmitProduct",(req, res) => {
    console.log(req.body);

    let ProductName = req.body.ProductName;
    let ProductPrice = req.body.ProductPrice;
    let ProductDescription = req.body.ProductDescription;
    let ProductCategory = req.body.ProductCategory;

    console.log(ProductName);
    console.log(ProductPrice);
    console.log(ProductDescription);
    console.log(ProductCategory);

    // Save The Data in Product Model:
    let Product = new ProductModel({
        ProductName: ProductName,
        ProductPrice: ProductPrice,
        ProductDescription: ProductDescription,
        ProductCategory: ProductCategory,
    });

    Product.save();


});






//!--------- Server configuration----------
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

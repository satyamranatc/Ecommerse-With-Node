import mongoose from "mongoose";


let ProductModel = mongoose.Schema({
    ProductName: String,
    ProductPrice: Number,
    ProductDescription: String,
    ProductCategory: String,
})

export default mongoose.model("Product", ProductModel)
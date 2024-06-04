import mongoose from "mongoose";

let UserScema = mongoose.Schema({
    name: String,
    username: String,
    password: String,
    email: String,
    phone: String,

});


export default mongoose.model("User", UserScema)
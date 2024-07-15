import mongoose from "mongoose";

const UserShema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:String,
        required:true
    }
})

const User = mongoose.model("User",UserShema);

export default User;
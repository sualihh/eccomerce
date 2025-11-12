import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
    },
    cartData: {
        type: Object,
        default:{},
    },
  
},{minimize:false});
//In Mongoose, by default, empty objects in a document are removed when saving to MongoDB. This behavior is called “minimizing” so in this time it  store empty object as it is


const userModel = mongoose.models.user || mongoose.model('user', userSchema)

export default userModel;
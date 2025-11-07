import mongoose from "mongoose";


const connectDb = async () => {
    mongoose.connection.on("connected", () => {
        console.log("Mongodb connected successfully");
    })
    await mongoose.connect(`${process.env.MONGODB_URL}/ecommerce`)
}

export default connectDb;



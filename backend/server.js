import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';

// app config

const app = express()
const port = process.env.PORT || 4000;
connectDb();
connectCloudinary();


// midlewares
app.use(express.json());
app.use(cors())

// api end points

app.use('/api/user', userRouter)

app.get('/', (req, res) => {
   res.send("API WORKS Successfully") 
})

app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON PORT  ${port}`)
})
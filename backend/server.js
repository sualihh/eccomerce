import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// app config

const app = express()
const port = process.env.PORT || 4000;
connectDb();
connectCloudinary();


// midlewares
app.use(express.json());// to use json string to object
app.use(cors()) // to cross in to another domain


// api end points

app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/orders', orderRouter)


app.get('/', (req, res) => {
    res.send("API WORKS Successfully")
})

app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON PORT  ${port}`)
})
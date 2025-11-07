import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/mongodb.js';

// app config

const app = express()
const port = process.env.PORT || 4000;
connectDb();

// midlewares
app.use(express.json());
app.use(cors())

// api end points

app.get('/', (req, res) => {
   res.send("API WORKS Successfully") 
})

app.listen(port, () => {
    console.log(`serve is running on port ${port}`)
})
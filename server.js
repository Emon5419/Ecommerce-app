import express from "express";
import cors from 'cors';
import colors from 'colors';
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from './config/db.js';
import authRoutes from "./routes/authRoute.js";
import categoryRoute from './routes/categoryRoutes.js';

//configs dotenv
dotenv.config();

//database config
connectDB();

//rest objects
const app = express()

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//routes
app.use("/api/v1/auth", authRoutes);
app.use ("/api/v1/category", categoryRoute);

//rest api 
app.get('/', (req,res)=>{
   res.send(`<h1>Welcome to Ecommerce app</h1>`)
})
 
//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, ()=>{
   console.log(`Server Running port ${PORT}`.bgYellow.black);
})
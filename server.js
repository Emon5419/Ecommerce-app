import express from "express";
import colors from 'colors';
import dotenv from "dotenv";

//configs dotenv
dotenv.config();

//rest objects
const app = express()

//rest api 
app.get('/', (req,res)=>{
   res.send(`<h1>Welcome to Ecommerce app</h1>`)
})
 
//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, ()=>{
   console.log(`Server Running in ${process.env.DEV_NODE} node on port ${PORT}`.bgCyan.white);
})
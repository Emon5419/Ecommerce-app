import express from "express";
import colors from 'colors';

//rest objects
const app = express()

//rest api 
app.get('/', (req,res)=>{
   res.send(`<h1>Welcome to Ecommerce app</h1>`)
})
 
//PORT
const PORT = 8080;

//run listen
app.listen(PORT, ()=>{
   console.log(`Server Running on ${PORT}`.bgCyan.white);
})
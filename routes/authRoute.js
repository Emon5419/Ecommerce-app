 import express from "express";
import { registerController, loginController } from "../controller/authController.js";


 //router object
 const router = express.Router()

 //routing
 
 //Register || Method Post
 router.post("/register",registerController)

 // Login || POST 
 router.post("/login", loginController)

 export default router;
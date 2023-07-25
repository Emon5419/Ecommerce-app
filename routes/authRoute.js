 import express from "express";
import { 
   registerController, 
   loginController,
   testController 
} from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middelwares/authMiddleware.js";


 //router object
 const router = express.Router();

 //routing
 
 //Register || Method Post
 router.post("/register",registerController);

 // Login || POST 
 router.post("/login", loginController);

 // Test Routes
 router.get("/test", requireSignIn, isAdmin,testController);

 export default router;
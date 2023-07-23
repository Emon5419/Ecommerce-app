import mongoose from "mongoose";
import colors from "colors";

const connectDB = async()=>{
   try{
      const conn = await mongoose.connect(process.env.MONGO_URL);
      console.log(`Connected To Mongodb Database ${conn.connection.host}`.bgYellow.black);


   } catch{
      console.log(`Error in Mongodb ${error}`.bgRed.white);

   }
}

export default connectDB;
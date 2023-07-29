import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const ForgotPasssword = () => {
   const [categories, setCategories] = useState([]);
   const [email, setEmail] = useState("");
   const [newPassword, setNewPassword] = useState("");
   const [answer, setAnswer] = useState("");

   const navigate = useNavigate();

   // form function
   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const res = await axios.post("/api/v1/auth/forgot-password", {
            email,
            newPassword,
            answer,
         });
         if (res && res.data.success) {
            toast.success(res.data && res.data.message);

            navigate("/login");
         } else {
            toast.error(res.data.message);
         }
      } catch (error) {
         console.log(error);
         toast.error("Something went wrong");
      }
   };
   //get all cat
   const getAllCategory = async () => {
      try {
         const { data } = await axios.get("/api/v1/category/get-category");
         if (data.success) {
            setCategories(data.category);
         }
      } catch (error) {
         console.log(error);
         toast.error("Something went wrong in getting category");
      }
   };

   useEffect(() => {
      getAllCategory();
   }, []);

   return (
      <Layout title={"Forgot Password-bazar.com"}>
         <div className="form-container ">
            <form onSubmit={handleSubmit}>
               <h4 className="title">RESET PASSWORD</h4>

               <div className="mb-3">
                  <input
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     className="form-control"
                     id="exampleInputEmail1"
                     placeholder="Enter Your Email "
                     required
                  />
               </div>
               <div className="mb-3">
                  <input
                     type="text"
                     value={answer}
                     onChange={(e) => setAnswer(e.target.value)}
                     className="form-control"
                     id="exampleInputEmail1"
                     placeholder="Enter Your favorite Sport Name "
                     required
                  />
               </div>
               <div className="mb-3">
                  <input
                     type="password"
                     value={newPassword}
                     onChange={(e) => setNewPassword(e.target.value)}
                     className="form-control"
                     id="exampleInputPassword1"
                     placeholder="Enter Your Password"
                     required
                  />
               </div>

               <button type="submit" className="btn btn-primary">
                  RESET
               </button>
            </form>
         </div>
      </Layout>
   );
};

export default ForgotPasssword;
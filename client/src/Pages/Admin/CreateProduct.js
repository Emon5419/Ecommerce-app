import React, { useState, useEffect } from "react"; 
import Layout from "./../../Components/Layout/Layout";
import AdminMenu from "./../../Components/Layout/AdminMenu";

const CreateProduct = () => {
   const [categories, setCategories] = useState([]);
   const [name, setName] = useState("");
   const [description, setDescription] = useState("");
   const [price, setPrice] = useState("");
   const [category, setCategory] = useState("");
   const [quantity, setQuantity] = useState("");
   const [shipping, setShipping] = useState("");
   const [photo, setPhoto] = useState("");
   return (
      <Layout title={"Dashboard - Create Product"}>
         <div className="container-fluid m-3 p-3">
            <div className="row">
               <div className="col-md-3">
                  <AdminMenu />
               </div>
               <div className="col-md-9">
                  <h1>Create Product</h1>
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default CreateProduct;
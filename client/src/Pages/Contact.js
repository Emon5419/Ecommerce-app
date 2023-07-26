import React from "react";
import Layout from "./../Components/Layout/Layout.js";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
   return (
      <Layout>
         <div className="row contactus">
            <div className="col-md-6 ">
               <img
                  src='https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/343121450_172596468702275_5521279498576179151_n.jpg?_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHUeOSNAicrLZk67HCI0aarlXIx4EZPF9SVcjHgRk8X1L3zQtTkrPTfFj7WbNZl4vtgzRsbcsrABluv2cct-lRW&_nc_ohc=lR_oCBNJmn0AX83aX30&_nc_ht=scontent.fcgp3-2.fna&oh=00_AfB9czvflsIavZNUGtSbCkM78Grduwfw5Hkhe7lkw6n8ig&oe=64C69BB7'
                  alt="contactus"
                  style={{ width: "50%" }}
               />
            </div>
            <div className="col-md-4">
               <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
               <p className="text-justify mt-2">
                  If you have any problem to visit websites.Then you contact us with no habitation.
               </p>
               <p className="mt-3">
                  <BiMailSend /> : www.alauddinemon3@gmail.com
               </p>
               <p className="mt-3">
                  <BiPhoneCall /> : +880 1845415506
               </p>
               <p className="mt-3">
                  <BiSupport /> : +880-184541-5506 (toll free)
               </p>
            </div>
         </div>
      </Layout>
   );
};

export default Contact;
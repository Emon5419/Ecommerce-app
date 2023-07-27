import React from "react";
import Layout from "../Components/Layout/Layout.js";
import { useAuth } from "../context/auth";

const HomePage = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Home - Best Offers"}>
      <h1>HomePage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default HomePage;
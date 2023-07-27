import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Policy from "./Pages/Policy";
import Pagenotfound from "./Pages/PageNotFound";
import Register from "./Pages/auth/Register";
import Login from "./Pages/auth/Login";
import Dashboard from "./Pages/user/Dashboard";
import PrivateRoute from "./Components/Layout/Routes/Private";
import ForgotPasssword from "./Pages/auth/ForgotPassword";
import AdminRoute from "./Components//Layout/Routes/AdminRoute";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import CreateCategory from "./Pages/Admin/CreateCategory";
import CreateProduct from "./Pages/Admin/CreateProduct";
import Users from "./Pages/Admin/User";
import Orders from "./Pages/user/Orders";
import Profile from "./Pages/user/Profile";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/dashboard" element={<PrivateRoute />}>

          <Route path="user" element={<Dashboard />} />

          <Route path="user/orders" element={<Orders />} />

          <Route path="user/profile" element={<Profile />} />

        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>

          <Route path="admin" element={<AdminDashboard />} />

          <Route path="admin/create-category" element={<CreateCategory />} />

          <Route path="admin/create-product" element={<CreateProduct />} />

          <Route path="admin/users" element={<Users />} />
          
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
import About from './Pages/About';
import Policy from './Pages/Policy';
import Contact from './Pages/Contact';
import HomePage from './Pages/HomePage';
import PageNotFound from './Pages/PageNotFound';
import { Routes, Route } from 'react-router-dom';
import Register from './Pages/auth/Register';
import Login from './Pages/auth/Login';
import Dashboard from './Pages/user/Dashboard';
import PrivateRoute from './Components/Layout/Routes/Private';
import ForgotPassword from './Pages/auth/ForgotPassword.js'


function App() {
  return (
    <>

      <Routes>

        <Route path='/' element={<HomePage/>} />

        <Route path='/register' element={<Register />} />

        <Route path='/login' element={<Login />} />

        {/* Protected Route */}
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

        <Route path='/forgot-password' element={<ForgotPassword />} />

        <Route path='/about' element={<About/>} />

        <Route path='/contact' element={<Contact />} />

        <Route path='/policy' element={<Policy />} />

        <Route path='/*' element={<PageNotFound />} />

      </Routes>

    </>
  );
}

export default App;

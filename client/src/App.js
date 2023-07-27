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


function App() {
  return (
    <>

      <Routes>

        <Route path='/' element={<HomePage/>} />

        <Route path='/register' element={<Register />} />

        <Route path='/login' element={<Login />} />

        <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path='' element={<Dashboard />} />
        </Route>

        <Route path='/about' element={<About/>} />

        <Route path='/contact' element={<Contact />} />

        <Route path='/policy' element={<Policy />} />

        <Route path='/*' element={<PageNotFound />} />

      </Routes>

    </>
  );
}

export default App;

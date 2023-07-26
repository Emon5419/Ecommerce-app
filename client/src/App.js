import About from './Pages/About';
import Policy from './Pages/Policy';
import Contact from './Pages/Contact';
import HomePage from './Pages/HomePage';
import PageNotFound from './Pages/PageNotFound';
import { Routes, Route } from 'react-router-dom';
import Register from './Pages/auth/Register';


function App() {
  return (
    <>

      <Routes>

        <Route path='/' element={<HomePage/>} />

        <Route path='/register' element={<Register />} />


        <Route path='/about' element={<About/>} />

        <Route path='/contact' element={<Contact />} />

        <Route path='/policy' element={<Policy />} />

        <Route path='/*' element={<PageNotFound />} />

      </Routes>

    </>
  );
}

export default App;

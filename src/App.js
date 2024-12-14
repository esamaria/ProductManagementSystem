import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Allpages from './Pages/Allpages';
import AddProduct from './Components/AddProduct';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}>
      <Route index element={<Allpages/>}/>
      <Route path="/addproduct" element={<AddProduct/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

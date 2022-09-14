import React from 'react';
import { Route, Routes } from "react-router-dom";
import ReactRouter from './R089_reactRouter'
import ReactRouter2 from './R089_reactRouter2'

// css
import '../css/new.css';

import HeaderAdmin from './Header/Header admin';

import Footer from './Footer/Footer';

function App(props) {
  return (
      <div className='App'>
        <HeaderAdmin />
        <Routes>
          <Route exact path="/" element={<ReactRouter/>} />
          <Route exact path='/reactRouter2' element={<ReactRouter2/>} />
        </Routes>
        <Footer />
      </div>
  );

}

export default App;

import React from 'react';
import { Route, Routes } from "react-router-dom";


// css
import '../css/new.css';
// header
import HeaderAdmin from './Header/Header admin';
// footer
import Footer from './Footer/Footer';
// login
import LoginForm from './LoginForm'

import ReactDebounce from "./R094_reactDebounce";

function App(props) {
  return (
      <div className='App'>
        <HeaderAdmin />
        <Routes>
          <Route exact path="/" element={<LoginForm/>} />
          <Route exact path="/Debounce" element={<ReactDebounce/>} />
        </Routes>
        <Footer />
      </div>
  );

}

export default App;

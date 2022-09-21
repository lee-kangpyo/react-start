import React from 'react';
import { Route, Routes } from "react-router-dom";


// css
import '../css/new.css';
// header
import HeaderAdmin from './Header/Header admin';
// footer
import Footer from './Footer/Footer';ㅞ
// login
import LoginForm from './LoginForm'

import ReactDebounce from "./R094_reactDebounce";
import ReactThrottle from "./R095_reactThrottle";
import FloatingPopulationList from './Floating_population/floatingPopulationList';

function App(props) {
  return (
      <div className='App'>
        <HeaderAdmin />
        <Routes>
          <Route exact path="/" element={<LoginForm/>} />
          <Route exact path="/Debounce" element={<ReactDebounce/>} />
          <Route exact path="/Throttle" element={<ReactThrottle/>} />
          <Route exact path="/floatingPopulationList" element={<FloatingPopulationList/>} />
        </Routes>
        <Footer />
      </div>
  );

}

export default App;

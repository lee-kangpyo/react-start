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
import ReactThrottle from "./R095_reactThrottle";
import FloatingPopulationList from './Floating_population/floatingPopulationList';
import ReactProxy from './R109_reactProxy'
import ApiGetJson from './R110ApiGetJson'
import ApiPostJson from './R111_ApiPostJson'
import SoftWareView from './SoftwareToolsManage/SoftwareView'
import SoftwareList from './SoftwareToolsManage/SoftwareList';

function App(props) {
  return (
      <div className='App'>
        <HeaderAdmin />
        <Routes>
          <Route exact path="/" element={<LoginForm/>} />
          <Route exact path="/Debounce" element={<ReactDebounce/>} />
          <Route exact path="/Throttle" element={<ReactThrottle/>} />
          <Route exact path="/floatingPopulationList" element={<FloatingPopulationList/>} />
          <Route exact path="/reactProxy" element={<ReactProxy/>} />
          <Route exact path="/apiGetJson" element={<ApiGetJson/>} />
          <Route exact path="/apiPostJson" element={<ApiPostJson/>} />
          <Route exact path="/softWareView" element={<SoftWareView/>} />
          <Route exact path="/softwareList" element={<SoftwareList/>} />
          
        </Routes>
        <Footer />
      </div>
  );

}

export default App;

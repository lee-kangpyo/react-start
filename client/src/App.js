import React from 'react';
import './App.css';
import ReactHoc from './Hoc/R075_ReactHoc'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className='app'>
      <h1 className='title'>Start React</h1>
      <ReactHoc name="전달할 파라미터"/>
    </div>
  );
}

export default App;

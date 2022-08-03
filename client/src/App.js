import React from 'react';
import './App.css';
import ImportComponent from './R003_ImportComponent'
import LifeCycle from './R008_Lifecycle'

function App() {
  return (
    <div>
      <h1>Start React</h1>
      <p>html 적용하기</p>
      <ImportComponent></ImportComponent>
      <LifeCycle
        prop_value = "FromApp.js"
      />
    </div>
  );
}

export default App;

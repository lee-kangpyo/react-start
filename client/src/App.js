import React from 'react';
import './App.css';
import PropsObjVal from './component2/R020_PropsObjVal'

function App() {
  return (
    <div>
      <h1>Start React</h1>
      <PropsObjVal Object_Json={{react:"react", two:"2"}}/>
    </div>
  );
}

export default App;

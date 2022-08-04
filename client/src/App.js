import React from 'react';
import './App.css';
import PropsBoolean from './component2/R019_PropsBoolean'

function App() {
  return (
    <div>
      <h1>Start React</h1>
      <PropsBoolean Bool={false}/>
      <PropsBoolean Bool/>
    </div>
  );
}

export default App;

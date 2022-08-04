import React from 'react';
import './App.css';
import PropsDataType from './component2/R018_PropsDatatype'

function App() {
  return (
    <div>
      <h1>Start React</h1>
      <PropsDataType
        String="react"
        Number={200}
        Boolean={1==1}
        Array={[0,1,2,3,4]}
        Object_Json={{react:"리액트", two:"2"}}
        Function={alert("Function!!!")}
      />
    </div>
  );
}

export default App;

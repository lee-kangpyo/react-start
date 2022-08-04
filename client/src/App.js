import React from 'react';
import './App.css';
import PropsNode from './component2/R023_PropsNode'

function App() {
  return (
    <div>
      <h1>Start React</h1>
      <PropsNode>
        <span>상위 콤포넌트에서 전달된 노트</span>
        <p>상위 콤포넌트에서 전달된 노트2</p>
      </PropsNode>
    </div>
  );
}

export default App;

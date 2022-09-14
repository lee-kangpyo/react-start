import React, {useState, useEffect} from 'react';

function R031_ReactHook(props) {
  const [contents, setContents] = useState('[이것은 useState입니다.]');

  useEffect(() => {
    console.log("useEffect");
  })

  return (
    <div style={{padding:"12px"}}>
      <h2>{contents}</h2>
      <button onClick={() => setContents("[이것이 hook이다]")}>버튼</button>
    </div>
  )
}

export default R031_ReactHook;

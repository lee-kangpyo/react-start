import React from 'react';

function R032_FragmentsFnc(props){
  return (
    <React.Fragment>
      <p>p tag</p>
      <span>span tag</span>
    </React.Fragment>
  )
}


class R032_Fragments extends React.Component {
  render () {
    return(
      <>
        <p>p tag</p>
        <span>span tag</span>
      </>
    )
  }
}

export {R032_Fragments as Fragment}
export default R032_FragmentsFnc

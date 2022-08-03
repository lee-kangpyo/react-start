import React, {Component} from 'react';

class R004_Lifecycle extends React.Component {
  render () {
    console.log('3. render Call.');
    return(
      <h2>[이것은 render 함수입니다.]</h2>
    )
  }
}

export default R004_Lifecycle;

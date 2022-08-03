import React from 'react';

class R005_Lifecycle extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    console.log('1. constructor Call');
  }

  render () {
    console.log('3. render Call.');
    return(
      <h2>[이것은 constructor 함수입니다.]</h2>
    )
  }
}

export default R005_Lifecycle;

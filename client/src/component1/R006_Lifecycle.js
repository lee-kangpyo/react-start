import React from 'react';

class R007_Lifecycle extends React.Component {
  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps Call : " + props.prop_value);
    return{};
  }

  constructor(props){
    super(props);
    this.state = {};
    console.log('1. constructor Call');
  }

  render () {
    console.log('3. render Call.');
    return(
      <h2>[이것은 getDerivedStateFromProps 함수입니다.]</h2>
    )
  }
}

export default R007_Lifecycle;

import React from 'react';

class R007_Lifecycle extends React.Component {
  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps Call : " + props.prop_value);
    return{
      tmp_state:props.prop_value
    };
  }

  constructor(props){
    super(props);
    this.state = {};
    console.log('1. constructor Call');
  }
  // 화면이 모두 그려진 후 실행되는 이벤트, 초기화에 사용
  componentDidMount(){
    console.log("4. componentDidMount Call");
    console.log("5. tmp_state : " + this.state.tmp_state);
  }

  render () {
    console.log('3. render Call.');
    return(
      <h2>[이것은 componentDidMount 함수입니다.]</h2>
    )
  }
}

export default R007_Lifecycle;

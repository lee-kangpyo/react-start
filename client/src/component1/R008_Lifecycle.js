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
    // 변경 단계의 생명주기 함 shouldComponentUpdate가 호출된다.
    this.setState({
      tmp_state2:true,
    });
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("6. shouldComponentUpdate Call / tmp_state2 : " + nextState.tmp_state2);
    // return 이 true면 render() 가 다시 실행된다.
    return nextState.tmp_state2;
  }

  render () {
    console.log('3. render Call.');
    return(
      <h2>[이것은 shouldComponentUpdate 함수입니다.]</h2>
    )
  }
}

export default R007_Lifecycle;

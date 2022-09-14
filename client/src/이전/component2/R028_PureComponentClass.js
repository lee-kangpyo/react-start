import React from 'react'

// PureComponent는 setState가 실행되어도 변수값만
// 단비교 객체는 참조값을 비교함 - 따라서 객체 배열 변경 버튼을 눌러주면 render가 실행된다.
class R028_PureComponentClass extends React.PureComponent {
  constructor(props){
    super(props)
    this.state = {
      String : "react",
      Array : ["react", {react:"123"}],
    }
  }

  buttonClick = (type) => {
    if(type === "String"){
      this.setState({String:'react'})
    }else{
      this.setState({Array:["react", {react:"123"}]})
    }
  }

  render () {
    console.log("render() 실행")
    return(
      <div>
        <button onClick={e => this.buttonClick("String")}>문자열 변경</button>
        <button onClick={e => this.buttonClick("Array")}>객체 배열 변경</button>
      </div>
    )
  }
}

export default R028_PureComponentClass;

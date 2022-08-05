import React from 'react'

class R027_ComponentClass extends React.Component {
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

export default R027_ComponentClass;

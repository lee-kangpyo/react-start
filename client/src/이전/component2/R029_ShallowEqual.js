import React from 'react';
import { shallowEqualArrays } from "shallow-equal";

class R029_ShallowEqual extends React.Component {
  constructor(props){
    super(props);
    this.state = { String : "react" }
  }

  shouldComponentUpate(nextProps, nextState){
    return !shallowEqualArrays(this.state, nextState)
  }

  componentDidMount(){
    const object = {react : 200};
    const array1 = ['리액트', object];
    const array2 = ['리액트', object];
    const array3 = ['리액트', {react : 200}];
    // 1과 2는 같은 값
    console.log("1 : 2 := " + shallowEqualArrays(array1, array2))
    // 2와 3은 다른 값
    console.log("2 : 3 := " + shallowEqualArrays(array2, array3))
    this.setState({String : "react"})

  }

  render () {
    console.log("render() 실행")
    return(
      <div>
        ShallowEqual
      </div>
    )
  }
}

export default R029_ShallowEqual;

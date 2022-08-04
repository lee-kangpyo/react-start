import React from 'react'
import PropTypes from 'prop-types'

class R025_SetState extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      String:'문자형',
    }
  }

  StateChange = (flag) => {
    if(flag == 'direct') this.state.String = "리액트"
    if(flag == "setstate") this.setState({string : "리액트"})
  }

  render () {
    return(
      <div style={{padding:"24px"}}>
        <button onClick={(e) => this.StateChange("direct", e)}>state 변경</button>
        <button onClick={(e) => this.StateChange("setstate", e)}>setState로 변경</button>
        <div>[State 변경하기] String : {this.state.String}</div>
      </div>
    )
  }
}

export default R025_SetState;

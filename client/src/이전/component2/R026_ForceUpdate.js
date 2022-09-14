import React from 'react'
import PropTypes from 'prop-types'

class R026_ForceUpdate extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      String:'문자형',
    }
  }

  StateChange = (flag) => {
    this.state.String = "리액트";
    this.forceUpdate();
  }

  render () {
    return(
      <div style={{padding:"24px"}}>
        <button onClick={(e) => this.StateChange(e)}>state 변경 후 강제 업데이트</button>
        <div>[State 변경하기] String : {this.state.String}</div>
      </div>
    )
  }
}

export default R026_ForceUpdate;

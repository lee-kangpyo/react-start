import React from 'react'
import PropTypes from 'prop-types'

class R024_State extends React.Component {
  constructor (props){
    super(props)
    // 컴포넌트 안에서 전역변수처럼 사용한다.
    this.state = {
      String:this.props.String,
      Number:222,
    }
  }
  render () {
    return(
      <div style={{padding:"24px"}}>
        {this.state.String}{this.state.Number}
      </div>
    )
  }
}

export default R024_State;

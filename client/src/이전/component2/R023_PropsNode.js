import React from 'react'

class R023_PropsNode extends React.Component {
  render () {
    return(
      <div style={{padding:"23px"}}>
        {this.props.children}
      </div>
    )
  }
}

export default R023_PropsNode;

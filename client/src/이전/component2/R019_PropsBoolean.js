import React from 'react'
import PropTypes from 'prop-types'

class R019_PropsDatatype extends React.Component {
  render () {
    let {
      Bool
    } = this.props;

    return (
        <div style={{padding:"0px"}}>
          {Bool ? '2. ': "1. "}
          {Bool.toString()}
        </div>

    )
  }
}

export default R019_PropsDatatype;

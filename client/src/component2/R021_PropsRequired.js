import React from 'react'
import PropTypes from 'prop-types'

class R021_PropsRequired extends React.Component {
  render () {
    let { String, Number } = this.props;

    return (
      <div style={{padding:"0px"}}>
        {String}{Number}
      </div>
    )

  }
}

R021_PropsRequired.propTypes ={
  String:PropTypes.isRequired,
}

export default R021_PropsRequired;

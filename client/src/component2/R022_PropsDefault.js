import React from 'react'
import PropTypes from 'prop-types'

class R022_PropsDefault extends React.Component {
  render () {
    let { String, Number } = this.props;

    return (
      <div style = {{padding:"10px"}}>
        {String}{Number}
      </div>
    )
  }
}

R022_PropsDefault.defaultProps = {
  String:"리액트",
  Number:"9999"
}

export default R022_PropsDefault;

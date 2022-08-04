import React from 'react'
import PropTypes from 'prop-types'

class R020_PropsObjVal extends React.Component {
  render () {
    let {
      Object_Json
    } = this.props;

    return(
      <div style = {{padding:"0px"}}>
        {JSON.stringify(Object_Json)}
      </div>
    )
  }
}

R020_PropsObjVal.propTypes = {
  Object_Json : PropTypes.shape({
    react:PropTypes.string,
    two:PropTypes.number
  })
}

export default R020_PropsObjVal;

import React from 'react'
import PropTypes from 'prop-types'

class R018_PropsDatatype extends React.Component {
  render () {
    let {
      String, Number, Boolean, Array, Object_Json, Function
    } = this.props;

    return(
      <div style={{padding : "0px"}}>
        <p>String : {String}</p>
        <p>Number : {Number}</p>
        <p>Boolean : {Boolean.toString()}</p>
        <p>Array : {Array.toString()}</p>
        <p>Object_Json : {JSON.stringify(Object_Json)}</p>
        <p>Function : {Function}</p>
      </div>
    )
  }
}

// 콘솔에 타입 에러 메시지가 출력됨
R018_PropsDatatype.propTypes = {
  String:PropTypes.number,
  Number:PropTypes.number,
  Boolean:PropTypes.bool,
  Array:PropTypes.array,
  Object_Json:PropTypes.object,
  Function:PropTypes.func,

}

export default R018_PropsDatatype;

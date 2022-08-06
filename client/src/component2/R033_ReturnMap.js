import React from 'react'
import PropTypes from 'prop-types'

class R033_ReturnMap extends React.Component {
  render () {
    const element_Array = [
      "react", 200, "map"
    ]
    return (
      <ul>
        {element_Array.map((elem) => <li>{elem}</li>)}
      </ul>
    )
  }
}

export default R033_ReturnMap;

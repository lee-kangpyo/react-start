import React from 'react'
import { Alert, UncontrolledAlert } from 'reactstrap'

class R034_ReactStrapAlerts extends React.Component {
  render () {
    return(
      <div>
        <Alert color="light">
          simple Alert [color:light]
        </Alert>
        <UncontrolledAlert color="warning">
          UncontrolledAlert [color : warning]
        </UncontrolledAlert>
      </div>
    )
  }
}

export default R034_ReactStrapAlerts;

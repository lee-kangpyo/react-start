import React from 'react'
import $ from 'jquery';

class R016_Jquery extends React.Component {
  input_alert = (e) => {
    var input_val = $("#inputId").val();
    alert(input_val);
  }
  render () {
    return(
      <div>
        <h2>[이것은 Jquery입니다.]</h2>
        <input id = "inputId" name = "inputNAme"/>
        <button id="buttonId" onClick = {e => this.input_alert(e)}>Jquery button</button>
      </div>
    )

  }
}

export default R016_Jquery;

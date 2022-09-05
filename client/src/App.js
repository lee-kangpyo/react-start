import React, { Component } from 'react';
import { connect } from "react-redux";
import StrAddButton from "./StrAddButton";

function App(props) {
  return (
      <div>
          <h1>리액트 시작</h1>
          {/* <span>{props.store.getState().data.str}</span><br/>
          <StrAddButton store={props.store}/> */}
          <span>{props.str} {props.test}</span><br/>
          <StrAddButton AppProp="789"/>
      </div>
  );

}

let mapStateToProps = (state, props) => {
  console.log('props from index.js : ' + props.indexProp)
  return {
    str:state.data.str,
    test:state.data.test
  }
}

App = connect(mapStateToProps, null)(App);

export default App;

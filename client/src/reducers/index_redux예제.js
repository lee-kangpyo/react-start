import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from './reducers';

const CallMiddleWare = store => nextMiddle => action => {
  console.log("1. reducer 실행 전");
  console.log('2. action.type : ' + action.type+', store str : '+store.getState().data.str);
  let result = nextMiddle(action);
  console.log('3. reducer 실행 후');
  console.log('4. action.type : ' + action.type+', store str : '+store.getState().data.str);
  return result;
}

const store = createStore(reducers, applyMiddleware(CallMiddleWare));

const root = ReactDOM.createRoot(document.getElementById('root'));

const listener = () => {
  root.render(
    <Provider store = {store}>
        <App indexProp="react" />
    </Provider>
  );
}


store.subscribe(listener);
listener();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

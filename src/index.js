import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import { counterReducer } from './redux/counterReducer'

let store = createStore(counterReducer)
console.log(store);
//Higher order components are components that take in other components as arguments and return them modified with "special powers"
//Context API
ReactDOM.render(
  <Provider store={store}>
    <App someProp={"someInfo"}/>
  </Provider>,
document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import allReducer from "./reducers"
import {Provider} from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css';


let store = createStore(allReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//Display
store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
      <App />
  </BrowserRouter>
</Provider>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

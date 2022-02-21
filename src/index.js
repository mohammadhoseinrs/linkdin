import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import LinkReducer from './services/Linkslice'

const store=configureStore({
  reducer:{
    linkdin:LinkReducer
  }
})

ReactDOM.render(
  <Provider store={store}>
<BrowserRouter>
    <App />
  </BrowserRouter>

  </Provider>
  ,
  document.getElementById('root')
);



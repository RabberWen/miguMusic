import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store/index'
import NavBotton from './components/common/NavBotton'
import PromotImg from './components/common/PromotImg'
import DownLoad from './components/common/DownLoad'
import "lib-flexible"
// import { Spin } from 'antd';
React.Component.prototype.NavBotton = NavBotton
React.Component.prototype.PromotImg = PromotImg
React.Component.prototype.DownLoad = DownLoad
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
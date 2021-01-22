import React from 'react';
import ReactDOM from 'react-dom';

import AppManager from "./components/app-manager/index"
// import Dock from "./components/dock/index";

import "./style/app.css"
import "./style/reset.css"

ReactDOM.render(
  <React.StrictMode>
    <AppManager />
  </React.StrictMode>,
  document.getElementById('root')
);

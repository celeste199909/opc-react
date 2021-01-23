import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import store from "./store/index"

import WebPC from "./WebPC"

ReactDOM.render(
  <Provider store={store}>
    <WebPC />
  </Provider>,
  document.getElementById('root')
);

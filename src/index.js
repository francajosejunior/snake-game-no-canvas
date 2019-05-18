import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './containers/App'

// import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { store } from './redux/index'

ReactDOM.render(
  //<Provider store={store}>
  <App />,
  //</Provider>
  document.querySelector('[data-js="app"]')
)

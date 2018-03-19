import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import App from './main/app'
import Reducers from './main/reducers'

const dev_tools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise)(createStore)(Reducers, dev_tools)
ReactDOM.render(
    <Provider store = {store} >
        <App />
    </Provider>
, document.getElementById('app'))
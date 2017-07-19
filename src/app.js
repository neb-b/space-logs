// @flow

import React from 'react'
import { Provider } from 'react-redux'
import reducer from './redux/reducers'
import AppWithNavigationState from './app-with-nav-state'
import store from './store'

const App = () =>
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>

export default App

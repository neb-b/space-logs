// @flow

import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import AppNavigator from './navigation'

/*
Connecting to the store just to access the nav prop which is required for
react-navigation to work with redux
*/

const AppWithNavigationState = ({
  dispatch,
  nav,
}: {
  dispatch: Function,
  nav: Object,
}) =>
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />

const mapStateToProps = state => ({
  nav: state.nav,
})

export default connect(mapStateToProps)(AppWithNavigationState)

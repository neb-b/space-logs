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
  dream,
}: {
  dispatch: Function,
  nav: Object,
  dream: Object,
}) => {
  // console.log('app nav', dream);
  return (
    <AppNavigator
      navigation={addNavigationHelpers({ dispatch, state: nav, dream })}
    />
  )
}

const mapStateToProps = state => ({
  nav: state.nav,
  dream: state.dream,
})

export default connect(mapStateToProps)(AppWithNavigationState)

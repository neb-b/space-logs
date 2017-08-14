// @flow

import React from 'react'
import { AppState } from 'react-native'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import AppNavigator from './navigation'

/*
Connecting to the store just to access the nav prop which is required for
react-navigation to work with redux
*/

class AppWithNavigationState extends React.PureComponent {
  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange.bind(this))
  }

  componentWillUnmount() {
    AppState.removeEventListener(
      'change',
      this._handleAppStateChange.bind(this)
    )
  }

  _handleAppStateChange = nextAppState => {
    const { nav, dispatch } = this.props
    if (nav.index !== 0) {
      dispatch({
        type: 'Navigation/RESET',
        index: 0,
        actions: [{ type: 'Navigate', routeName: 'Login' }],
      })
    }
  }

  render() {
    const {
      dispatch,
      nav,
      dream,
    }: {
      dispatch: Function,
      nav: Object,
      dream: Object,
    } = this.props
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
        })}
      />
    )
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
  dream: state.dream,
})

export default connect(mapStateToProps)(AppWithNavigationState)

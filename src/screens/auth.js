// @flow

import React from 'react'
import { View, Button, TouchableOpacity, AppState, Alert } from 'react-native'
import Text from '../components/common/text'
import { connect } from 'react-redux'
import { login, skipPasscode, createPasscode } from '../redux/actions/auth'
import Screen from './internal/screen'
import Auth from '../components/auth'
import TouchID from 'react-native-touch-id'

class AuthScreen extends React.Component {
  static navigationOptions = props => {
    return {
      header: null,
    }
  }

  componentDidUpdate(prevProps) {
    const { navigation, auth } = this.props
    if (!prevProps.auth.isAuthorized && auth.isAuthorized) {
      navigation.navigate('Main')
    }
  }

  render() {
    const { settings, auth } = this.props
    const { loaded } = settings

    return (
      <Screen>
        {loaded && <Auth {...this.props} {...auth} />}
      </Screen>
    )
  }
}

export default connect(({ settings, auth }) => ({ settings, auth }), {
  login,
  skipPasscode,
  createPasscode,
})(AuthScreen)

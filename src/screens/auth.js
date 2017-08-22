// @flow

import React from 'react'
import { View, Button, TouchableOpacity, AppState, Alert } from 'react-native'
import Text from '../components/common/text'
import { connect } from 'react-redux'
import { onAuth, skipPasscode } from '../redux/actions/auth'
import Screen from './internal/screen'
import Auth from '../components/auth'
import TouchID from 'react-native-touch-id'

class AuthScreen extends React.Component {
  static navigationOptions = props => {
    return {
      header: null,
    }
  }

  _touchId() {
    this.props.navigation.navigate('Main')
    ///
    // i'll do this at some point
    //
    // TouchID.isSupported()
    //   .then(() => {
    //     console.log("HELLO!!!")
    //     Alert.alert({text: 'OK', onPress: () => this.triggerTouchID() })
    //   })
    //   .catch(err => {
    //     console.log('no touchId')
    //   })
  }

  // triggerTouchID() {
  //   TouchID.authenticate('to demo this react-native component')
  //     .then(success => {
  //       Alert.alert('Authenticated Successfully');
  //     })
  //     .catch(error => {
  //       Alert.alert('Authentication Failed');
  //     });
  // }

  render() {
    const { auth, settings } = this.props
    const { loaded } = settings

    return (
      <Screen>
        {loaded &&
          <Auth {...this.props} {...auth} touchId={this._touchId.bind(this)} />}
      </Screen>
    )
  }
}

export default connect(({ settings, auth }) => ({ settings, auth }), {
  onAuth,
  skipPasscode,
})(AuthScreen)

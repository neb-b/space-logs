// @flow

import React from 'react'
import { View, Button, TouchableOpacity, AppState, Alert } from 'react-native'
import Text from '../components/common/text'
import { connect } from 'react-redux'
import Screen from './internal/screen'
import Login from '../components/login'
import TouchID from 'react-native-touch-id'

class LoginScreen extends React.Component {
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
    return (
      <Screen>
        <Login {...this.props} touchId={this._touchId.bind(this)} />
      </Screen>
    )
  }
}

export default connect(null, {})(LoginScreen)

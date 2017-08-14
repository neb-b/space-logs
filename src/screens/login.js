// @flow

import React from 'react'
import { View, Button, TouchableOpacity } from 'react-native'
import Text from '../components/common/text'
import { connect } from 'react-redux'
import Screen from './internal/screen'
import Login from '../components/login'

class LoginScreen extends React.Component {
  static navigationOptions = props => {
    return {
      header: null,
    }
  }

  render() {
    const { navigation } = this.props
    return (
      <Screen>
        <Login {...this.props} />
      </Screen>
    )
  }
}

export default connect(null, {})(LoginScreen)

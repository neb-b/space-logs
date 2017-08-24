// @flow

import React from 'react'
import { connect } from 'react-redux'
import { Text, View, Button } from 'react-native'
import { togglePassCodeRequired, deletePassCode } from '../redux/actions/auth'
console.log('togg', togglePassCodeRequired)
import Screen from './internal/screen'
import TabIcon from './internal/tab-icon'
import Header from './header/tab-navigation-header.connected'
import Settings from '../components/settings'

class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header title="Settings" navigation={navigation} />,
    tabBarIcon: ({ focused }) => <TabIcon focused={focused} page="settings" />,
  })

  componentDidUpdate() {
    const { navigation, auth } = this.props
    if (auth.passCodeRequired && !auth.passCode) {
      navigation.navigate('AuthModal')
    }
  }

  render() {
    return (
      <Screen scroll>
        <Settings {...this.props} />
      </Screen>
    )
  }
}

export default connect(({ auth }) => ({ auth }), {
  togglePassCodeRequired,
  deletePassCode,
})(SettingsScreen)

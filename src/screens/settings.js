// @flow

import React from 'react'
import { Text, View, Button } from 'react-native'
import Screen from './internal/screen'
import TabIcon from './internal/tab-icon'
import Header from './header/tab-navigation-header.connected'
import Settings from '../components/settings'

class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header title="Settings" navigation={navigation} />,
    tabBarIcon: ({ focused }) => <TabIcon focused={focused} page="settings" />,
  })

  render() {
    return (
      <Screen scroll>
        <Settings {...this.props} />
      </Screen>
    )
  }
}

export default SettingsScreen

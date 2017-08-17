// @flow

import React from 'react'
import { Text, View, Button } from 'react-native'
import Screen from './internal/screen'
import TabIcon from './internal/tab-icon'
import HeaderButton from './header/header-button'

class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Settings',
    path: 'settings',
    headerRight: (
      <HeaderButton
        type="newDream"
        onPress={() => navigation.navigate('DreamBuilder')}
      />
    ),
    tabBarIcon: ({ focused }) => <TabIcon focused={focused} page="settings" />,
  })

  render() {
    return (
      <Screen scroll>
        <Text>Settings</Text>
      </Screen>
    )
  }
}

export default SettingsScreen

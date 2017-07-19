import React from 'react'
import { Text, View, Button } from 'react-native'
import Screen from './internal/screen'
import TabIcon from './internal/tab-icon'
import HeaderButton from './internal/header-button'

class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Dreams',
    headerRight: <HeaderButton type="NewDream" navigation={navigation} />,
    tabBarIcon: ({ focused }) => {
      return <TabIcon focused={focused} page="settings" />
    },
  })

  render() {
    return <Screen scroll />
  }
}

export default SettingsScreen

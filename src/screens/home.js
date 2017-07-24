import React from 'react'
import { Text, View, Button } from 'react-native'
import Screen from './internal/screen'
import TabIcon from './internal/tab-icon'
import HeaderButton from './internal/header-button'

class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Dreams',
    path: 'dreams',
    headerRight: (
      <HeaderButton
        type="newDream"
        onPress={() => navigation.navigate('NewDream')}
      />
    ),
    tabBarIcon: ({ focused }) => {
      return <TabIcon focused={focused} page="newDream" />
    },
  })

  render() {
    return <Screen scroll />
  }
}

export default SettingsScreen

import React from 'react'
import { Text, View, Button } from 'react-native'
import Screen from './internal/screen'
import TabIcon from './internal/tab-icon'
import HeaderButton from './internal/header-button'

class StatsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Stats',
    headerRight: <HeaderButton type="NewDream" navigation={navigation} />,
    tabBarIcon: ({ focused }) => <TabIcon focused={focused} page="stats" />,
  })

  render() {
    return (
      <Screen scroll>
        <Text>Stats</Text>
      </Screen>
    )
  }
}

export default StatsScreen

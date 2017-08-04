// @flow

import React from 'react'
import { Text, View, Button } from 'react-native'
import Screen from './internal/screen'
import TabIcon from './internal/tab-icon'
import HeaderButton from './internal/header-button'

class StatsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Dream on Aug 8',
    headerRight: (
      <HeaderButton
        type="newDream"
        onPress={() => navigation.navigate('NewDream')}
      />
    ),
  })

  render() {
    console.log('view dreqm', this.props)
    return (
      <Screen scroll>
        <Text>View Dream</Text>
      </Screen>
    )
  }
}

export default StatsScreen

// @flow

import React from 'react'
import { Text, View, Button } from 'react-native'
import moment from 'moment'
import Screen from './internal/screen'
import TabIcon from './internal/tab-icon'
import HeaderButton from './internal/header-button'

class StatsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state: { params: { dream } } } = navigation
    return {
      title: moment(dream.dateCreated).format('MMM Do'),
      headerRight: (
        <HeaderButton
          type="newDream"
          onPress={() => navigation.navigate('NewDream')}
        />
      ),
    }
  }

  render() {
    console.log('view dreqm', this.props)
    const { navigation: { state: { params: { dream } } } } = this.props
    console.log('??', dream)
    return (
      <Screen scroll>
        <Text>
          {dream.dreamOptions.wasLucid ? 'Was lucid' : 'Not lucid'}
        </Text>
        <Text>
          {dream.text}
        </Text>
      </Screen>
    )
  }
}

export default StatsScreen

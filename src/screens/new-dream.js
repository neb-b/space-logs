// @flow
import React from 'react'
import { Text, View, Button } from 'react-native'
import Screen from './internal/screen'
import HeaderButton from './internal/header-button'

class NewDreamScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'New Dream',
    headerRight: (
      <HeaderButton text="Save" onPress={() => navigation.goBack()} />
    ),
  })

  render() {
    return (
      <Screen>
        <Text>New Dream</Text>
      </Screen>
    )
  }
}

export default NewDreamScreen

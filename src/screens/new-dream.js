// @flow
import React from 'react'
import { Text, View, Button } from 'react-native'
import Screen from './internal/screen'

class NewDreamScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Settings',
    headerRight: <Button title="Save" onPress={() => navigation.goBack()} />,
  })

  render() {
    return (
      <Screen>
        <Text>Settings</Text>
      </Screen>
    )
  }
}

export default NewDreamScreen

// @flow
import React from 'react'
import { Text, View, Button } from 'react-native'
import Screen from './internal/screen'
import HeaderButton from './internal/header-button'
import NewDreamView from '../components/new-dream-view'

class NewDreamScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'New Dream',
    path: 'dreams/new',
    header: null,
    headerRight: (
      <HeaderButton text="Save" onPress={() => navigation.goBack()} />
    ),
  })

  render() {
    return <NewDreamView />
  }
}

export default NewDreamScreen

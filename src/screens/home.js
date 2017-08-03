import React from 'react'
import { connect } from 'react-redux'
import { Text, View, Button } from 'react-native'
import Screen from './internal/screen'
import TabIcon from './internal/tab-icon'
import HeaderButton from './internal/header-button'
import Dashboard from '../components/dashboard'

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
    console.log('scren', this.props)
    return (
      <Screen scroll>
        <Dashboard {...this.props} />
      </Screen>
    )
  }
}

export default connect(({ dreams }) => ({ ...dreams }))(SettingsScreen)

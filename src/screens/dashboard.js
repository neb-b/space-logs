import React from 'react'
import { connect } from 'react-redux'
import { Text, View, Button } from 'react-native'
import { populateViewDream } from '../redux/actions/dream'
import Screen from './internal/screen'
import TabIcon from './internal/tab-icon'
import HeaderButton from './internal/header-button'
import Dashboard from '../components/dashboard'

class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Dreams',
    path: 'dreams',
    headerLeft: null,
    headerRight: (
      <HeaderButton
        type="newDream"
        onPress={() => navigation.navigate('DreamBuilder')}
      />
    ),
    tabBarIcon: ({ focused }) => {
      return <TabIcon focused={focused} page="newDream" />
    },
  })

  render() {
    return (
      <Screen scroll>
        <Dashboard {...this.props} />
      </Screen>
    )
  }
}

export default connect(({ dreams }) => ({ ...dreams }), { populateViewDream })(
  SettingsScreen
)

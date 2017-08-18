import React from 'react'
import { connect } from 'react-redux'
import { Text, View, Button } from 'react-native'
import { populateViewDream } from '../redux/actions/dream'
import Screen from './internal/screen'
import TabIcon from './internal/tab-icon'
import HeaderButton from './header/header-button'
import Dashboard from '../components/dashboard'
import Header from './header/tab-navigation-header.connected'

class DashboardScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header title="Dreams" navigation={navigation} />,
    tabBarIcon: ({ focused }) => <TabIcon focused={focused} page="home" />,
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
  DashboardScreen
)

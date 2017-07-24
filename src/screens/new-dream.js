// @flow
import React from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import Screen from './internal/screen'
import HeaderButton from './internal/header-button'
import NewDreamView from '../components/new-dream-view'

class NewDreamScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'New Dream',
    path: 'dreams/new',
    header: null,
  })

  render() {
    return <NewDreamView {...this.props} />
  }
}

export default connect(s => {
  console.log('s.nav', s.nav)
  const routes = s.nav.routes
  let screenKey
  for (let i = 0; i < routes.length; i++) {
    if (routes[i].routeName === 'NewDream') {
      screenKey = routes[i].key
      break
    }
  }
  const key = s.nav.routes.forEach
  return {
    nav: s.nav,
    screenKey,
  }
})(NewDreamScreen)

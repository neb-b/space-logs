// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  addNavigationHelpers,
  StackNavigator,
  TabNavigator,
} from 'react-navigation'

import HomeScreen from './screens/home'
import NewDreamScreen from './screens/new-dream'
import SettingsScreen from './screens/settings'
import StatsScreen from './screens/stats'

const TabNavigation = TabNavigator(
  {
    Home: { screen: HomeScreen },
    Stats: { screen: StatsScreen },
    Settings: { screen: SettingsScreen },
  },
  {
    // Home tabNav styles/settings
    swipeEnabled: true,
    animationEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      inactiveTintColor: '#c6c6c6',
      activeTintColor: '#fff48f',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#161616',
      },
    },
  }
)

const NewDreamNavigation = StackNavigator(
  {
    NewDream: { screen: NewDreamScreen },
  },
  {
    mode: 'modal',
    initialRoute: 'NewDream',
  }
)

const headerOptions = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#161616',
  },
}

const AppNavigator = StackNavigator(
  {
    Main: { screen: TabNavigation, navigationOptions: headerOptions },
    NewDream: { screen: NewDreamNavigation },
  },
  { headerMode: 'screen' }
)

export default AppNavigator

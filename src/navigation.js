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

const TabNavigation = TabNavigator({
  Home: { screen: HomeScreen },
  Stats: { screen: StatsScreen },
  Settings: { screen: SettingsScreen },
})

const AppNavigator = StackNavigator({
  Main: { screen: TabNavigation },
  NewDream: { screen: NewDreamScreen },
})

export default AppNavigator

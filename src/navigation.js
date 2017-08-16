// @flow

import React from 'react'
import { Animated, Easing } from 'react-native'
import { connect } from 'react-redux'
import {
  addNavigationHelpers,
  StackNavigator,
  TabNavigator,
} from 'react-navigation'

import DashboardScreen from './screens/dashboard'
import DreamBuilderScreen from './screens/dream-builder'
import SettingsScreen from './screens/settings'
import ViewDreamScreen from './screens/view-dream'
import LoginScreen from './screens/login'

const TabNavigation = TabNavigator(
  {
    Home: { screen: DashboardScreen },
    Settings: { screen: SettingsScreen },
  },
  {
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      inactiveTintColor: '#c6c6c6',
      activeTintColor: '#d0b1f9',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#161616',
      },
    },
  }
)

const DreamBuilderNavigation = StackNavigator(
  {
    Builder: { screen: DreamBuilderScreen },
  },
  {
    initialRoute: 'Builder',
  }
)

const headerOptions = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#161616',
  },
  headerTitleStyle: {
    fontWeight: '600',
    fontSize: 20,
    fontFamily: 'Futura-Medium',
    marginTop: -5,
  },
}

const MainCardNavigation = StackNavigator(
  {
    Dashboard: { screen: TabNavigation },
    ViewDream: { screen: ViewDreamScreen, navigationOptions: headerOptions },
  },
  { headerMode: 'none' }
)

const AppNavigator = StackNavigator(
  {
    Login: { screen: LoginScreen },
    Main: { screen: MainCardNavigation, navigationOptions: headerOptions },
    DreamBuilder: { screen: DreamBuilderNavigation },
  },
  { initialRoute: 'Login', mode: 'modal' }
)

export default AppNavigator

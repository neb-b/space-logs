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
import AuthScreen from './screens/auth'

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
const PassCodeBuilderNavigation = StackNavigator(
  {
    AuthModal: { screen: AuthScreen },
  },
  {
    initialRoute: 'AuthModal',
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
    Dashboard: { screen: TabNavigation, navigationOptions: headerOptions },
    ViewDream: { screen: ViewDreamScreen, navigationOptions: headerOptions },
  },
  { headerMode: 'screen' }
)

const AppNavigator = StackNavigator(
  {
    Auth: { screen: AuthScreen },
    Main: {
      screen: MainCardNavigation,
      navigationOptions: Object.assign({}, headerOptions, {
        gesturesEnabled: false,
      }),
    },
    DreamBuilder: { screen: DreamBuilderNavigation },
    PassCodeBuilder: { screen: PassCodeBuilderNavigation },
  },
  { initialRoute: 'Auth', mode: 'modal', headerMode: 'none' }
)

export default AppNavigator

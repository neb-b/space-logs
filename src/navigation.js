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
import StatsScreen from './screens/stats'
import ViewDreamScreen from './screens/view-dream'

const TabNavigation = TabNavigator(
  {
    Home: { screen: DashboardScreen },
    Stats: { screen: StatsScreen },
    Settings: { screen: SettingsScreen },
  },
  {
    // Home tabNav styles/settings
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
    headerMode: 'screen',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps
        const { index } = scene

        const height = layout.initHeight
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        })

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        })

        return { opacity, transform: [{ translateY }] }
      },
    }),
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

const AppNavigator = StackNavigator({
  Main: { screen: TabNavigation, navigationOptions: headerOptions },
  ViewDream: { screen: ViewDreamScreen, navigationOptions: headerOptions },
  DreamBuilder: { screen: DreamBuilderNavigation },
})

export default AppNavigator

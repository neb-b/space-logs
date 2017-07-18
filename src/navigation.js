import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import HomeScreen from './screens/home';
import NewDreamScreen from './screens/new-dream';

const AppNavigator = StackNavigator({
  Main: { screen: HomeScreen },
  NewDream: { screen: NewDreamScreen },
});

export default AppNavigator

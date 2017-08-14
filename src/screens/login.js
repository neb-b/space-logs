// @flow

import React from 'react'
import { View, Button, TouchableOpacity, AppState } from 'react-native'
import Text from '../components/common/text'
import { connect } from 'react-redux'
import Screen from './internal/screen'
import Login from '../components/login'

class LoginScreen extends React.Component {
  static navigationOptions = props => {
    return {
      header: null,
    }
  }

  //   state = {
  //   appState: AppState.currentState
  // }
  //
  // componentDidMount() {
  //   AppState.addEventListener('change', this._handleAppStateChange.bind(this));
  // }
  //
  // componentWillUnmount() {
  //   AppState.removeEventListener('change', this._handleAppStateChange.bind(this));
  // }
  //
  // _handleAppStateChange = (nextAppState) => {
  //   // console.log('x', this.props);
  //   this.setState({appState: nextAppState});
  // }

  render() {
    // console.log('t', this.props);
    return (
      <Screen>
        <Login {...this.props} />
      </Screen>
    )
  }
}

export default connect(null, {})(LoginScreen)

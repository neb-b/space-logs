// @flow

import React from 'react'
import { View, Dimensions, TouchableOpacity } from 'react-native'
import Text from './common/text'
import Stars from './stars'
import styles from './login/styles'
import LinearGradient from 'react-native-linear-gradient'

export default class extends React.PureComponent {
  componentDidMount() {
    // app is loaded, now decided what to do with auth flow
    const { navigation, auth, settings } = this.props
    const { passcodeRequired, isFirstOpen } = auth

    if (!passcodeRequired && !isFirstOpen) {
      navigation.navigate('Main')
    }
  }

  render() {
    const {
      navigation,
      onAuth,
      passcodeRequired,
      isFirstOpen,
      updatePasscode,
      skipPasscode,
    } = this.props

    return (
      <View>
        {isFirstOpen &&
          <View style={{ flex: 1, alignItems: 'center', paddingTop: 200 }}>
            <Text style={{ color: '#fff' }}>Welcome!</Text>
            <TouchableOpacity
              style={styles.authButton}
              onPress={updatePasscode}
            >
              <Text style={styles.addPassCode}>Add a passcode</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.authButton}
              onPress={() => {
                skipPasscode()
                navigation.navigate('Main')
              }}
            >
              <Text style={styles.skipPasscode}>I don't want to use one</Text>
            </TouchableOpacity>
          </View>}

        {passcodeRequired &&
          !isFirstOpen &&
          <LinearGradient
            colors={['#080808', '#1b174e']}
            style={[styles.container]}
          >
            <TouchableOpacity style={styles.login} onPress={onAuth}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </LinearGradient>}
      </View>
    )
  }
}

// @flow

import React from 'react'
import { View, Dimensions, TouchableOpacity } from 'react-native'
import Text from './common/text'
import Stars from './stars'
import styles from './auth/styles'
import LinearGradient from 'react-native-linear-gradient'

export default class extends React.PureComponent {
  componentDidMount() {
    // app is loaded, now decided what to do with auth flow
    const { navigation, auth, settings } = this.props
    const { passCodeRequired, isFirstOpen } = auth

    if (!passCodeRequired && !isFirstOpen) {
      navigation.navigate('Main')
    }
  }

  render() {
    const {
      navigation,
      login,
      passCodeRequired,
      isFirstOpen,
      updatePasscode,
      skipPasscode,
      passCode,
      createPasscode,
    } = this.props

    return (
      <View style={styles.authWrapper}>
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

        {passCodeRequired &&
          !isFirstOpen &&
          <LinearGradient
            colors={['#080808', '#1b174e']}
            style={[styles.container]}
          >
            {passCode
              ? <TouchableOpacity style={styles.login} onPress={() => login(1)}>
                  <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
              : <View
                  style={{ flex: 1, alignItems: 'center', paddingTop: 200 }}
                >
                  <Text style={{ color: '#fff' }}>Choose a passcode</Text>
                  <TouchableOpacity
                    style={styles.login}
                    onPress={() => createPasscode(1)}
                  >
                    <Text style={styles.loginText}>1</Text>
                  </TouchableOpacity>
                </View>}
          </LinearGradient>}
      </View>
    )
  }
}

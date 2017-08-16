// @flow

import React from 'react'
import { View, Dimensions, TouchableOpacity } from 'react-native'
import Text from './common/text'
import Stars from './common/stars'
import styles from './login/styles'
import LinearGradient from 'react-native-linear-gradient'

export default props => {
  const { navigation, touchId } = props
  return (
    <LinearGradient colors={['#000716', '#1b174e']} style={[styles.container]}>
      <Stars />

      <TouchableOpacity style={styles.login} onPress={touchId}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

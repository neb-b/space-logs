// @flow

import React from 'react'
import { View, TouchableOpacity, Switch } from 'react-native'
import Text from './common/text'
import styles from './settings/styles'

const settings = ['Require passcode', 'Morning reminders', 'Reality checks']

export default props => {
  const { auth, togglePassCodeRequired, deletePassCode } = props
  return (
    <View style={styles.container}>
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>Require a passcode</Text>
        <Switch
          value={auth.passCodeRequired}
          onValueChange={() => {
            console.log('???')
            togglePassCodeRequired()
          }}
        />
      </View>
    </View>
  )
}

// @flow

import React from 'react'
import { View, TouchableOpacity, Switch } from 'react-native'
import Text from './common/text'
import styles from './settings/styles'

const settings = ['Morning reminders', 'Reality checks']

export default props => {
  return (
    <View style={styles.container}>
      {settings.map(setting => {
        return (
          <View style={styles.listItem} key={setting}>
            <Text style={styles.listItemText}>
              {setting}
            </Text>
            <Switch />
          </View>
        )
      })}
    </View>
  )
}

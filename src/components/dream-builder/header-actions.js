import React from 'react'
import { View, TouchableOpacity, DeviceEventEmitter } from 'react-native'
import Text from '../common/text'
import styles from './styles'

export default ({ navigation, screenId, saveDream, cancelCreateDream }) => {
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity
        onPress={() => {
          cancelCreateDream()
          navigation.goBack(screenId)
        }}
        style={[styles.headerActionBtn, styles.cancel]}
      >
        <Text style={styles.headerActionText}>Cancel</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          saveDream()
          DeviceEventEmitter.emit('saveDreamBuilder')
          navigation.goBack(screenId)
        }}
        style={[styles.headerActionBtn, styles.save]}
      >
        <Text style={styles.headerActionText}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}

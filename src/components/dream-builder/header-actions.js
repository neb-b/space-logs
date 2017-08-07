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
          navigation.goBack(screenId)

          // After going back, emit this event which I am listening for on view-dream screen
          // the setTimeout is for a weird issue where the state is update, but in this.props inside
          // the event listener it is referencing the old state
          setTimeout(() => {
            DeviceEventEmitter.emit('saveDreamBuilder')
          }, 0)
        }}
        style={[styles.headerActionBtn, styles.save]}
      >
        <Text style={styles.headerActionText}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}

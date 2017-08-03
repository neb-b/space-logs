import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Text from '../common/text'
import styles from './styles'

export default ({ navigation, screenId, saveDream }) => {
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity
        onPress={() => navigation.goBack(screenId)}
        style={[styles.headerActionBtn, styles.cancel]}
      >
        <Text style={styles.headerActionText}>Cancel</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          console.log('saving dream...')
          saveDream()
          navigation.goBack(screenId)
        }}
        style={[styles.headerActionBtn, styles.save]}
      >
        <Text style={styles.headerActionText}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}

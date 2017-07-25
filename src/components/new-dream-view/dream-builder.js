import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'

export default () => {
  return (
    <View style={styles.newDreamWrapper}>
      <Text style={styles.question}>Did you realize you were dreaming?</Text>
      <View style={styles.actionsWrapper}>
        <TouchableOpacity style={[styles.questionAction, styles.yesButton]}>
          <Text style={[styles.questionActionText]}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.questionAction, styles.noButton]}>
          <Text style={[styles.questionActionText]}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

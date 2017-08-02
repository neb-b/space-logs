import React from 'react'
import { View, TouchableOpacity, TextInput } from 'react-native'
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput'
import styles from './styles'
import Text from '../common/text'

// how did you feel when you woke up?
// did you have anything interesting to eat before you went to sleep

export default props => {
  console.log('dream builder', props)
  const { isEditingDreamText, toggleDreamEditText } = props

  const WhatHappenedEl = isEditingDreamText ? View : TouchableOpacity
  const OtherInfoEl = isEditingDreamText ? TouchableOpacity : View

  const whatHappenedStyle = isEditingDreamText
    ? styles.activeDreamAction
    : styles.dreamAction
  const otherInfoStyle = isEditingDreamText
    ? styles.dreamAction
    : styles.activeDreamAction

  return (
    <View style={styles.dreamBuilder}>
      <View style={styles.dreamActions}>
        <WhatHappenedEl
          style={[styles.baseDreamAction, whatHappenedStyle]}
          onPress={toggleDreamEditText}
        >
          <Text
            style={[
              styles.baseDreamActionText,
              isEditingDreamText && styles.activeDreamActionText,
            ]}
          >
            What happened?
          </Text>
        </WhatHappenedEl>

        <OtherInfoEl
          style={[styles.baseDreamAction, otherInfoStyle]}
          onPress={toggleDreamEditText}
        >
          <Text
            style={[
              styles.baseDreamActionText,
              !isEditingDreamText && styles.activeDreamActionText,
            ]}
          >
            Other info
          </Text>
        </OtherInfoEl>
      </View>
      <View style={styles.dreamBuilderContent}>
        {isEditingDreamText
          ? <Text>Editing the dream</Text>
          : <Text>Other info stuff</Text>}
      </View>
    </View>
  )
}

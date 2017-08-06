import React from 'react'
import { View, TouchableOpacity, TextInput } from 'react-native'
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput'
import styles from './styles'
import Text from '../common/text'
import DreamInput from './input'
import ListOfOptions from './list-of-options'
// how did you feel when you woke up?
// did you have anything interesting to eat before you went to sleep

export default props => {
  // console.log('dream builder', props)
  const {
    isEditingDreamText,
    toggleDreamEditText,
    text,
    updateDreamText,
    updateDreamOptions,
    dreamOptions,
  } = props

  // TODO: theres definitely a better way to do this
  // tab nav would be much simpler, but idk
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
          style={[styles.whatHappened]}
          onPress={toggleDreamEditText}
        >
          <Text
            style={[
              styles.whatHappenedText,
              // isEditingDreamText && styles.activeDreamActionText,
            ]}
          >
            What happened?
          </Text>
        </WhatHappenedEl>

        <OtherInfoEl style={[styles.otherInfo]} onPress={toggleDreamEditText}>
          <Text style={[styles.otherInfoText]}>Other info</Text>
        </OtherInfoEl>
      </View>
      <View style={styles.dreamBuilderContent}>
        {isEditingDreamText
          ? <DreamInput text={text} updateDreamText={updateDreamText} />
          : <ListOfOptions
              {...dreamOptions}
              updateDreamOptions={updateDreamOptions}
            />}
      </View>
    </View>
  )
}

// @flow

import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Text from './common/text'
import styles from './view-dream/styles'

const dreamOptionTexts = {
  wasLucid: 'I was lucid',

  wasNightmare: 'It was a nightmare',

  wasRecurrent: 'I noticed reoccuring patterns',
}

export default props => {
  const { dreamOptions, text } = props
  const { wasLucid, wasRecurrent, wasNightmare } = dreamOptions
  return (
    <View style={styles.container}>
      <View style={styles.dreamOptions}>
        {Object.keys(dreamOptions).map(key => {
          const option = dreamOptions[key]
          return option
            ? <Text key={key} style={styles.dreamOption}>
                {dreamOptionTexts[key]}
              </Text>
            : null
        })}
      </View>
      <Text style={styles.dreamText}>
        {text}
      </Text>
    </View>
  )
}

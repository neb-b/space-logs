import React from 'react'
import { View } from 'react-native'
import Text from '../common/text'
import styles from './styles'
const dreamOptionTexts = {
  wasLucid: 'I was lucid',

  wasNightmare: 'It was a nightmare',

  wasRecurrent: 'I noticed reoccuring patterns',
}

export default ({ dreamOptions, text }) => {
  return (
    <View>
      <View style={styles.dreamOptions}>
        {Object.keys(dreamOptions).map(key => {
          const option = !!dreamOptions[key]
          return option
            ? <Text key={key} style={styles.dreamOption}>
                {dreamOptionTexts[key]}
              </Text>
            : null
        })}
      </View>
      <Text style={styles.dreamText}>
        {text ? text : 'No dream details...'}
      </Text>
    </View>
  )
}

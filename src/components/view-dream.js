// @flow

import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default props => {
  const { dreamOptions, text } = props
  const { wasLucid, wasRecurrent, wasNightmare } = dreamOptions
  return (
    <View>
      <Text>
        {wasLucid ? 'Was lucid' : 'Not lucid'}
      </Text>
      <Text>
        {wasNightmare ? 'Was nightmare' : 'Not nightmare'}
      </Text>
      <Text>
        {wasRecurrent ? 'Was recurrent' : 'Not recurrent'}
      </Text>
      <Text>
        {text}
      </Text>
    </View>
  )
}

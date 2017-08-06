import React from 'react'
import { Vieiw, TouchableOpacity } from 'react-native'

export default ({ dreamOption }) => {
  return (
    <TouchableOpacity
      style={[
        styles.dreamOptionBtn,
        dreamOptions.wasLucid && styles.wasLucidActive,
      ]}
      onPress={() => updateDreamOptions({ wasLucid: !dreamOptions.wasLucid })}
    >
      <Text
        style={[
          styles.dreamOptionBtnText,
          dreamOptions.wasLucid && styles.wasLucidActiveText,
        ]}
      >
        {'Lucid'}
        {!dreamOptions.wasLucid && '?'}
      </Text>
    </TouchableOpacity>
  )
}

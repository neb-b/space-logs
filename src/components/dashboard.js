// @flow

import React from 'react'
import { View } from 'react-native'
// import styles from './dream-builder/styles'
import Text from './common/text'

export default props => {
  console.log('comps/dashboard', props)
  const { dreams } = props
  return (
    <View>
      {dreams.map(({ text, dreamOptions = {} }, i) =>
        <View key={i} style={{ borderWidth: 1, borderColor: '#fff' }}>
          <Text>
            {text}
          </Text>
          <Text>
            {dreamOptions.wasLucid ? 'was lucid' : 'not lucid'}
          </Text>
        </View>
      )}
    </View>
  )
}

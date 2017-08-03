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
      {dreams.map((dream, i) =>
        <View key={i} style={{ borderWidth: 1, borderColor: '#fff' }}>
          <Text>
            {dream.text}
          </Text>
        </View>
      )}
    </View>
  )
}

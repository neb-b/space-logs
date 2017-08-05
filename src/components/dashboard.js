// @flow

import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
// import styles from './dream-builder/styles'
import Text from './common/text'

const viewDream = dream =>
  NavigationActions.navigate({
    routeName: 'ViewDream',
    params: { dream },
  })

export default props => {
  const { dreams, navigation } = props

  return (
    <View>
      {dreams.map((dream, i) => {
        const { text, dateCreated, dreamOptions } = dream
        return (
          <TouchableOpacity
            key={i}
            style={{ borderWidth: 1, borderColor: '#fff' }}
            onPress={() => navigation.dispatch(viewDream(dream))}
          >
            <Text>
              {dateCreated}
            </Text>
            <Text>
              {text}
            </Text>
            <Text>
              {dreamOptions.wasLucid ? 'was lucid' : 'not lucid'}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

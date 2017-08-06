// @flow

import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
// import styles from './dream-builder/styles'
import Text from './common/text'

const viewDream = dreamDate =>
  NavigationActions.navigate({
    routeName: 'ViewDream',
    params: { dreamDate },
  })

export default props => {
  const { dreams, navigation, populateViewDream } = props

  return (
    <View>
      {dreams.map((dream, i) => {
        const { text, dateCreated, dreamOptions } = dream
        return (
          <TouchableOpacity
            key={i}
            style={{ borderWidth: 1, borderColor: '#fff' }}
            onPress={() => {
              // I am passing the dreamDate through the navigation because the dashboard header
              // can't access this.props (?) on the first render. Waiting to render and then setting
              // the title looks terrible. This way it renders the title on first render
              populateViewDream(dream)
              navigation.dispatch(viewDream(dream.dreamDate))
            }}
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

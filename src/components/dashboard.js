// @flow

import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import moment from 'moment'
import Text from './common/text'
import styles from './dashboard/styles'

const hasActiveDreamOptions = dreamOptions => {
  const has = Object.keys(dreamOptions).some(key => dreamOptions[key])
  console.log('has?', has)
  return has
}

const viewDream = dreamDate =>
  NavigationActions.navigate({
    routeName: 'ViewDream',
    params: { dreamDate },
  })

export default props => {
  const { dreams, navigation, populateViewDream } = props

  return (
    <View style={styles.container}>
      {dreams.map((dream, i) => {
        const { text, dreamDate, dreamOptions } = dream
        return (
          <TouchableOpacity
            key={i}
            style={styles.dreamWrapper}
            onPress={() => {
              // I am passing the dreamDate through the navigation because the dashboard header
              // can't access this.props (?) on the first render. Waiting to render and then setting
              // the title looks terrible. This way it renders the title on first render
              populateViewDream(dream)
              navigation.dispatch(viewDream(dream.dreamDate))
            }}
          >
            <View>
              <Text style={styles.date}>
                {moment(dreamDate).format('MMM Do')}
              </Text>
            </View>
            <View>
              {hasActiveDreamOptions(dreamOptions) &&
                <View style={styles.dreamOptionsWrapper}>
                  {Object.keys(dreamOptions).map(
                    option =>
                      dreamOptions[option]
                        ? <View key={option} style={[styles.dreamOption]}>
                            <Text
                              style={[styles.dreamOptionText, styles[option]]}
                            >
                              {option.slice(3)}
                            </Text>
                          </View>
                        : null
                  )}
                </View>}
              <View style={styles.dreamTextWrapper}>
                <Text style={styles.dreamText}>
                  {text ? text : 'No dream details'}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

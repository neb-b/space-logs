// @flow

import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import moment from 'moment'
import Text from './common/text'
import styles from './dashboard/styles'

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
        const { text, dateCreated, dreamOptions } = dream
        return (
          <View key={i} style={styles.dreamWrapper}>
            <TouchableOpacity
              onPress={() => {
                // I am passing the dreamDate through the navigation because the dashboard header
                // can't access this.props (?) on the first render. Waiting to render and then setting
                // the title looks terrible. This way it renders the title on first render
                populateViewDream(dream)
                navigation.dispatch(viewDream(dream.dreamDate))
              }}
            >
              <View style={styles.dreamInfoWrapper}>
                <Text style={styles.date}>
                  {moment(dateCreated).format('MMM Do')}
                </Text>
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
                </View>
              </View>
              <View style={styles.dreamTextWrapper}>
                <Text style={styles.dreamText}>
                  {text ? text : 'No dream details'}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )
      })}
    </View>
  )
}

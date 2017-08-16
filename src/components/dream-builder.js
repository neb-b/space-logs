// @flow

import React from 'react'
import { View, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import styles from './dream-builder/styles'
import DreamBuilder from './dream-builder/dream-builder'
import Text from './common/text'
import LinearGradient from 'react-native-linear-gradient'
import moment from 'moment'
import DreamInput from './dream-builder/input'

export default props => {
  const {
    navigation,
    dreamBuilder,
    toggleDreamEditText,
    updateDreamText,
    saveDream,
    cancelCreateDream,
    updateDreamOptions,
  } = props

  const { dreamOptions, text } = dreamBuilder

  return (
    <LinearGradient
      colors={['#000716', '#311f41', '#701256']}
      style={[styles.container]}
    >
      <ScrollView style={styles.dreamBuilder}>
        <Text style={styles.dreamDate}>
          {moment(dreamOptions.dreamDate).format('MMM Do')}
        </Text>
        <View style={styles.topItems}>
          <TouchableOpacity
            style={[
              styles.dreamOptionBtn,
              styles.wasLucidBtn,
              dreamOptions.wasLucid && styles.wasLucidActive,
            ]}
            onPress={() =>
              updateDreamOptions({ wasLucid: !dreamOptions.wasLucid })}
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
          <TouchableOpacity
            style={[
              styles.dreamOptionBtn,
              { borderColor: '#7a94ff' },

              dreamOptions.wasNightmare && {
                backgroundColor: '#7a94ff',
                borderColor: '#7a94ff',
              },
            ]}
            onPress={() =>
              updateDreamOptions({ wasNightmare: !dreamOptions.wasNightmare })}
          >
            <Text
              style={[
                { color: '#7a94ff' },
                dreamOptions.wasNightmare && styles.wasLucidActiveText,
              ]}
            >
              {'Nightmare'}
              {!dreamOptions.wasNightmare && '?'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.dreamOptionBtn,
              { borderColor: '#f6a63b' },
              dreamOptions.wasRecurrent && {
                backgroundColor: '#f6a63b',
                borderColor: '#f6a63b',
              },
            ]}
            onPress={() =>
              updateDreamOptions({ wasRecurrent: !dreamOptions.wasRecurrent })}
          >
            <Text
              style={[
                { color: '#f6a63b' },
                dreamOptions.wasRecurrent && styles.wasLucidActiveText,
              ]}
            >
              {'Recurrent'}
              {!dreamOptions.wasRecurrent && '?'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dreamBuilderContent}>
          <DreamInput text={text} updateDreamText={updateDreamText} />
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

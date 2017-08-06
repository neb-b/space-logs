// @flow

import React from 'react'
import { View, Dimensions, TouchableOpacity } from 'react-native'
import styles from './dream-builder/styles'
import Stars from './dream-builder/stars'
import Header from './dream-builder/header'
import DreamBuilder from './dream-builder/dream-builder'
import LinearGradient from 'react-native-linear-gradient'

export default props => {
  const {
    navigation,
    nav: { screenId },
    dreamBuilder,
    toggleDreamEditText,
    updateDreamText,
    saveDream,
    cancelCreateDream,
    updateDreamOptions,
  } = props
  return (
    <LinearGradient
      colors={['#000716', '#311f41', '#701256']}
      style={[styles.container]}
    >
      <Stars />
      <Header
        navigation={navigation}
        screenId={screenId}
        saveDream={saveDream}
        cancelCreateDream={cancelCreateDream}
      />
      <DreamBuilder
        {...dreamBuilder}
        toggleDreamEditText={toggleDreamEditText}
        updateDreamText={updateDreamText}
        updateDreamOptions={updateDreamOptions}
      />
    </LinearGradient>
  )
}

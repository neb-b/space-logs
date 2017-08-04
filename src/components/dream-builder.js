// @flow

import React from 'react'
import { View, Dimensions, TouchableOpacity } from 'react-native'
import styles from './dream-builder/styles'
import Stars from './dream-builder/stars'
import Header from './dream-builder/header'
import DreamBuilder from './dream-builder/dream-builder'

export default props => {
  // console.log('comps/dream-builder', props)
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
    <View style={[styles.container]}>
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
    </View>
  )
}

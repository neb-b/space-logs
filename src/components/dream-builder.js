// @flow

import React from 'react'
import { View, Dimensions, TouchableOpacity } from 'react-native'
import styles from './dream-builder/styles'
import Stars from './dream-builder/stars'
import Header from './dream-builder/header'
import DreamBuilder from './dream-builder/dream-builder'

export default props => {
  const { navigation, nav: { screenId }, newDream, toggleDreamEditText } = props
  return (
    <View style={[styles.container]}>
      <Stars />
      <Header navigation={navigation} screenId={screenId} />
      <DreamBuilder {...newDream} toggleDreamEditText={toggleDreamEditText} />
    </View>
  )
}

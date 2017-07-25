// @flow

import React from 'react'
import { View, Dimensions, TouchableOpacity } from 'react-native'
import styles from './new-dream-view/styles'
import Stars from './new-dream-view/stars'
import Header from './new-dream-view/header'
import DreamBuilder from './new-dream-view/dream-builder'
const { height: HEIGHT, width: WIDTH } = Dimensions.get('window')

export default props => {
  const { navigation, nav: { screenId } } = props
  return (
    <View style={[styles.container]}>
      <Stars />
      <Header navigation={navigation} screenId={screenId} />
      <DreamBuilder />
    </View>
  )
}

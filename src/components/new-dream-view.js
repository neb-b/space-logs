// @flow

import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import styles from './new-dream-view/styles'

const starConfig = {
  number: 75,
  maxSize: 4,
}

const { height: screenHeight, width: screenWidth } = Dimensions.get('window')
const getStarStyles = () => {
  const top = Math.floor(Math.random() * screenHeight)
  const left = Math.floor(Math.random() * screenWidth)
  const radius = Math.floor(Math.random() * starConfig.maxSize)
  const starColors = ['#CF7757', '#6338CF', '#FF11B4', '#987CDF', '#8bc4ff']
  const starColor = starColors[Math.floor(Math.random() * starColors.length)]
  const starIntensity = Math.floor(Math.random() * 25) + 75
  const backgroundColor = `${starColor}${('0' + starIntensity).slice(-2)}`

  return {
    top,
    left,
    height: radius,
    width: radius,
    borderRadius: radius / 2,
    backgroundColor,
  }
}

const renderStars = () => {
  const stars = []

  for (let i = 0; i < starConfig.number; i++) {
    const star = () => <View style={[styles.star, { ...getStarStyles() }]} />
    stars.push(star)
  }

  return (
    <View>
      {stars.map((Star, i) => <Star key={i} />)}
    </View>
  )
}

export default () => {
  return (
    <View style={[styles.container]}>
      {renderStars()}
    </View>
  )
}

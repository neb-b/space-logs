// @flow

import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import styles from './new-dream-view/styles'

const starConfig = {
  number: 75,
  maxSize: 2,
  colors: ['#ffa585', '#ae8fff', '#ff8fdc', '#8fc6ff'],
}

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window')

const getStarStyles = () => {
  const radius = Math.random() * starConfig.maxSize + 0.5
  const starColors = starConfig.colors
  const starColor = starColors[Math.floor(Math.random() * starColors.length)]

  return {
    height: radius,
    width: radius,
    borderRadius: radius / 2,
    backgroundColor: '#fff',
    shadowColor: starColor,
    shadowOpacity: 1,
    shadowRadius: 5,
  }
}

const getStarLocation = () => {
  const top = Math.floor(Math.random() * HEIGHT)
  const left = Math.floor(Math.random() * WIDTH)

  return { top, left }
}

const renderStars = () => {
  const stars = []

  for (let i = 0; i < starConfig.number; i++) {
    const star = () => {
      const starLocation = getStarLocation()
      const starStyle = getStarStyles()

      return <View style={[styles.star, starLocation, starStyle]} />
    }

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

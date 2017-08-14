import React, { PureComponent } from 'react'
import { View, Dimensions } from 'react-native'
import styles from './styles'

const starConfig = {
  number: 75,
  maxSize: 1.75,
  colors: ['#febba4', '#b295ff', '#fba7e1', '#a2cefc', '#faf9ff'],
  defaultHeight: 85,
}

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window')

const getStarStyles = height => {
  const radius = Math.random() * starConfig.maxSize + 0.5
  const starColors = starConfig.colors
  const glowColor = starColors[Math.floor(Math.random() * starColors.length)]
  const starColor = starColors[Math.floor(Math.random() * starColors.length)]

  return {
    height: radius,
    width: radius,
    borderRadius: radius / 2,
    backgroundColor: starColor,
    shadowColor: glowColor,
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowOffset: { height: 1 },
  }
}

const getStarLocation = height => {
  const top = Math.floor(Math.random() * (height || HEIGHT))
  const left = Math.floor(Math.random() * WIDTH)

  return { top, left }
}

// using PureComponent instead of a stateless component to avoid re-renders
class Stars extends PureComponent {
  render() {
    const { height } = this.props
    const stars = []

    for (let i = 0; i < starConfig.number; i++) {
      const star = () => {
        const starLocation = getStarLocation(height)
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
}

export default Stars

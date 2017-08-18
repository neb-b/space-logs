import React from 'react'
import { View } from 'react-native'
import Text from '../../components/common/text'
import styles from './styles'

export default ({
  title,
  headerLeft: HeaderLeft,
  headerRight: HeaderRight,
}) => {
  const hasHeaderLeft = !!HeaderLeft
  const hasHeaderRight = !!HeaderRight
  return (
    <View style={styles.container}>
      <View style={styles.headerItem}>
        {hasHeaderLeft && <HeaderLeft />}
      </View>
      <View style={styles.headerItem}>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
      <View style={[styles.headerItem, styles.headerRight]}>
        {hasHeaderRight && <HeaderRight />}
      </View>
    </View>
  )
}

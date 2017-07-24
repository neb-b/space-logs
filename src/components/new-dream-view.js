// @flow

import React from 'react'
import { View, Dimensions, TouchableOpacity } from 'react-native'
import styles from './new-dream-view/styles'
import Stars from './new-dream-view/stars'
import Text from './common/text'

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window')

const Steps = () => {
  return (
    <View style={styles.newDreamWrapper}>
      <Text style={styles.question}>Did you realize you were dreaming?</Text>
      <View style={styles.actionsWrapper}>
        <TouchableOpacity style={[styles.questionAction, styles.yesButton]}>
          <Text style={[styles.questionActionText]}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.questionAction, styles.noButton]}>
          <Text style={[styles.questionActionText]}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity style={[styles.headerActionBtn, styles.cancel]}>
        <Text style={styles.headerActionText}>Cancel</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.headerActionBtn, styles.save]}>
        <Text style={styles.headerActionText}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}

export default () => {
  return (
    <View style={[styles.container]}>
      <Stars />
      <Header />
      <Steps />
    </View>
  )
}

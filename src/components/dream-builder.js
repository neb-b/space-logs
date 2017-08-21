// @flow

import React from 'react'
import {
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native'
import styles from './dream-builder/styles'
import Text from './common/text'
import LinearGradient from 'react-native-linear-gradient'
import moment from 'moment'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class extends React.PureComponent {
  updateScroll(reactNode: any) {
    this.refs.scroll.scrollToFocusedInput(reactNode)
  }
  render() {
    const {
      navigation,
      dreamBuilder,
      toggleDreamEditText,
      updateDreamText,
      saveDream,
      cancelCreateDream,
      updateDreamOptions,
      toggleEditDate,
      showDateModal,
    } = this.props

    const { dreamOptions, dreamDate, text } = dreamBuilder

    return (
      <LinearGradient
        colors={['#000716', '#311f41', '#701256']}
        style={[styles.container]}
      >
        <KeyboardAwareScrollView style={styles.dreamBuilder} ref="scroll">
          <TouchableOpacity onPress={toggleEditDate}>
            <Text style={styles.dreamDate}>
              {moment(dreamDate || Date.now()).format('MMM Do')}
            </Text>
          </TouchableOpacity>
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
                updateDreamOptions({
                  wasNightmare: !dreamOptions.wasNightmare,
                })}
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
                updateDreamOptions({
                  wasRecurrent: !dreamOptions.wasRecurrent,
                })}
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
          <TextInput
            style={styles.input}
            value={text}
            multiline={true}
            placeholder="I was battling dragons..."
            onChangeText={text => updateDreamText(text)}
            onContentSizeChange={e => this.updateScroll(e.target)}
          />
        </KeyboardAwareScrollView>
      </LinearGradient>
    )
  }
}

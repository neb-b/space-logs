import React from 'react'
import { View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput'
import styles from './styles'
import Text from '../common/text'
import DreamInput from './input'
import ListOfOptions from './list-of-options'
import Icon from 'react-native-vector-icons/MaterialIcons'
import moment from 'moment'

// how did you feel when you woke up?
// did you have anything interesting to eat before you went to sleep

export default props => {
  const {
    isEditingDreamText,
    toggleDreamEditText,
    text,
    updateDreamText,
    updateDreamOptions,
    dreamOptions = {}, // dreamOptions undefined on NAVIGATION/BACK ??
  } = props

  return (
    <ScrollView style={styles.dreamBuilder}>
      <Text style={styles.dreamDate}>
        {moment(dreamOptions.dreamDate).format('MMM Do')}
      </Text>
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
            updateDreamOptions({ wasNightmare: !dreamOptions.wasNightmare })}
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
            updateDreamOptions({ wasRecurrent: !dreamOptions.wasRecurrent })}
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
      <View style={styles.dreamActions}>
        <TouchableOpacity
          style={[styles.whatHappened]}
          onPress={toggleDreamEditText}
        >
          <Text style={[styles.whatHappenedText]}>What happened?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dreamBuilderContent}>
        {isEditingDreamText
          ? <DreamInput text={text} updateDreamText={updateDreamText} />
          : <ListOfOptions
              {...dreamOptions}
              updateDreamOptions={updateDreamOptions}
            />}
      </View>
    </ScrollView>
  )
}

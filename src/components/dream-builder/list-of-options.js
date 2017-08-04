import React from 'react'
import { View, TouchableOpacity, Switch, ScrollView } from 'react-native'
import Text from '../common/text'
import styles from './styles'

export default ({ updateDreamOptions, wasLucid }) => {
  return (
    <ScrollView style={{ paddingTop: 30 }}>
      <TouchableOpacity
        onPress={() => {
          cancelCreateDream()
          navigation.goBack(screenId)
        }}
        style={{ flexDirection: 'row', justifyContent: 'space-between' }}
      >
        <Text style={{ color: '#fff' }}>Lucid?</Text>
        <Switch
          onValueChange={val => updateDreamOptions({ wasLucid: val })}
          value={wasLucid}
        />
      </TouchableOpacity>
    </ScrollView>
  )
}

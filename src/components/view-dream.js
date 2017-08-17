// @flow

import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Text from './common/text'
import Modal from 'react-native-modal'
import styles from './view-dream/styles'

const dreamOptionTexts = {
  wasLucid: 'I was lucid',

  wasNightmare: 'It was a nightmare',

  wasRecurrent: 'I noticed reoccuring patterns',
}

export default props => {
  const {
    navigation,
    dreamOptions,
    text,
    confirmDelete,
    deleteDream,
    cancelDeleteDream,
    id,
  } = props
  const { wasLucid, wasRecurrent, wasNightmare } = dreamOptions
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.dreamOptions}>
          {Object.keys(dreamOptions).map(key => {
            const option = dreamOptions[key]
            return option
              ? <Text key={key} style={styles.dreamOption}>
                  {dreamOptionTexts[key]}
                </Text>
              : null
          })}
        </View>
        <Text style={styles.dreamText}>
          {text}
        </Text>
      </View>
      <Modal
        isVisible={confirmDelete}
        backdropColor="#000000"
        backdropOpacity={0.8}
        animationInTiming={300}
        animationOutTiming={300}
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
      >
        <View
          style={{
            padding: 30,
            backgroundColor: '#c9dcff',
            justifyContent: 'flex-end',
            margin: 0,
          }}
        >
          <Text style={{ fontSize: 18 }}>
            Are you sure you want to delete this dream?
          </Text>
          <TouchableOpacity
            style={{
              marginTop: 20,
              padding: 20,
              backgroundColor: '#e45446',
              borderRadius: 10,
            }}
            onPress={() => {
              deleteDream(id)
              navigation.goBack()
            }}
          >
            <Text
              style={{ textAlign: 'center', color: '#fff', fontWeight: '700' }}
            >
              Delete it
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ padding: 20 }}
            onPress={() => cancelDeleteDream()}
          >
            <Text style={{ textAlign: 'center', fontWeight: '700' }}>Stop</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

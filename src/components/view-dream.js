// @flow

import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Text from './common/text'
import Modal from 'react-native-modal'
import styles from './view-dream/styles'
import DreamContent from './view-dream/dream-content'

export default props => {
  const { navigation, deleteDream, cancelDeleteDream, dream } = props
  const { dreamOptions, text, confirmDelete, id } = dream
  const { wasLucid, wasRecurrent, wasNightmare } = dreamOptions
  return (
    <View style={styles.container}>
      <DreamContent {...dream} />

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
            backgroundColor: '#353875',
            justifyContent: 'flex-end',
            margin: 0,
          }}
        >
          <Text style={{ fontSize: 18, color: '#ffffff' }}>
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
            <Text
              style={{ textAlign: 'center', fontWeight: '700', color: '#fff' }}
            >
              Stop
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

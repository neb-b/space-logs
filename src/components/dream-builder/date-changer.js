import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import styles from './styles'
import Text from '../common/text'
import Icon from 'react-native-vector-icons/MaterialIcons'
import DateTimePicker from 'react-native-modal-datetime-picker'
export default props => {
  const { toggleEditDate, updateDreamDate, dreamBuilder } = props
  const { dreamDate, showDateModal } = dreamBuilder
  const today = new Date()
  return (
    <DateTimePicker
      isVisible={showDateModal}
      onConfirm={date => {
        console.log('date', date, typeof date, Object.keys(date))
        updateDreamDate(date)
      }}
      onCancel={toggleEditDate}
      date={dreamDate || today}
      maximumDate={today}
    />
  )
}

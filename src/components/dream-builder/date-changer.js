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
  const savedDreamDate =
    typeof dreamDate === 'object' ? dreamDate : new Date(dreamDate)
  return (
    <DateTimePicker
      isVisible={showDateModal}
      onConfirm={date => {
        updateDreamDate(date)
      }}
      onCancel={toggleEditDate}
      date={savedDreamDate || today}
      maximumDate={today}
    />
  )
}

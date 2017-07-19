// @flow

import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

// will probably have this be a icon map
const textMap = {
  NewDream: 'fiber-new',
}

// do something with this
const buttonColor = '#51cbcf'

const HeaderButton = ({
  type,
  navigation,
}: {
  type: string,
  navigation: Object,
}) => {
  const buttonType = textMap[type]

  return (
    <TouchableOpacity onPress={() => navigation.navigate(type)}>
      <Icon name={buttonType} color={buttonColor} size={40} />
    </TouchableOpacity>
  )
}

export default HeaderButton

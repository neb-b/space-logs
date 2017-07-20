// @flow

import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

// will probably have this be a icon map
const textMap = {
  newDream: 'fiber-new',
}

// do something with this
const buttonColor = '#51cbcf'

const HeaderButton = ({
  type,
  text,
  onPress,
}: {
  type?: string,
  text?: string,
  onPress: Function,
}) => {
  const buttonType = textMap[type]

  return (
    <TouchableOpacity onPress={onPress}>
      {text &&
        <Text
          style={{
            color: buttonColor,
            fontSize: 20,
            paddingRight: 10,
            fontWeight: '700',
          }}
        >
          {text}
        </Text>}
      {buttonType && <Icon name={buttonType} color={buttonColor} size={40} />}
    </TouchableOpacity>
  )
}

export default HeaderButton

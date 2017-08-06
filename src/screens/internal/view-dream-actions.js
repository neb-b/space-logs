// @flow

import React from 'react'
import { connect } from 'react-redux'
import { TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

// will probably have this be a icon map
const textMap = {
  newDream: 'playlist-add',
}

// do something with this
const buttonColor = '#fff48f'

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
      {buttonType
        ? <Icon name={buttonType} color={buttonColor} size={30} />
        : <Text style={{ color: '#fff' }}>
            {type}
          </Text>}
    </TouchableOpacity>
  )
}

export default connect(s => {
  console.log('s', s)
  return s
})(HeaderButton)

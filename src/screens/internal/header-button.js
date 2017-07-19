import React from 'react'
import { Button } from 'react-native'

// will probably have this be a icon map
const textMap = {
  NewDream: 'New Dream',
}

// do something with this
const buttonColor = '#ffffff'

const HeaderButton = ({ type, navigation }) => {
  const text = textMap[type]

  return (
    <Button
      title={text}
      onPress={() => navigation.navigate(type)}
      color={buttonColor}
    />
  )
}

export default HeaderButton

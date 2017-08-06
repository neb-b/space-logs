import React from 'react'
import { Text } from 'react-native'

const CustomText = ({ children, style }) =>
  <Text
    style={[
      { fontFamily: 'Futura-Medium', backgroundColor: 'transparent' },
      style,
    ]}
  >
    {children}
  </Text>

export default CustomText

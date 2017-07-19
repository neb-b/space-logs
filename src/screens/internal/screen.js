import React from 'react'
import { View, ScrollView, StatusBar } from 'react-native'

/*
  Screen wrapper element.
  Contains page styling, and sets the wrapper element
*/

const Screen = ({ children, scroll }) => {
  const WrapperEl = scroll ? ScrollView : View
  return (
    <WrapperEl>
      <StatusBar barStyle="light-content" />
      {children}
    </WrapperEl>
  )
}

export default Screen

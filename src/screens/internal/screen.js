// @flow

import React from 'react'
import { View, ScrollView, StatusBar } from 'react-native'

/*
  Screen wrapper element.
  Contains page styling, and sets the wrapper element
*/

const Screen = ({
  children,
  scroll,
}: {
  children?: React$Element<any>,
  scroll?: boolean,
}) => {
  const WrapperEl = scroll ? ScrollView : View
  return (
    <WrapperEl style={{ backgroundColor: '#4f4f4f' }}>
      <StatusBar barStyle="light-content" />
      {children}
    </WrapperEl>
  )
}

export default Screen

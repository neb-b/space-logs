// @flow

import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

const pageMap = {
  home: 'settings-system-daydream',
  stats: 'bubble-chart',
  settings: 'settings',
}

const focusedColor = '#d0b1f9'
const defaultColor = '#f4f4f4'

const TabIcon = ({ focused, page }: { focused: boolean, page: string }) => {
  return (
    <Icon
      name={pageMap[page]}
      color={focused ? focusedColor : defaultColor}
      size={25}
    />
  )
}

export default TabIcon

// @flow

import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

const pageMap = {
  settings: 'settings-system-daydream',
  stats: 'bubble-chart',
  settings: 'settings',
}

const focusedColor = '#eeed5f'
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

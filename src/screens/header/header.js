import React from 'react'
import { View } from 'react-native'
import Text from '../../components/common/text'

export default ({
  title,
  headerLeft: HeaderLeft,
  headerRight: HeaderRight,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 30,
        backgroundColor: '#161616',
      }}
    >
      <View>
        <HeaderLeft />
      </View>
      <View>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 20,
            fontFamily: 'Futura-Medium',
            marginTop: -5,
            color: '#fff',
          }}
        >
          {title}
        </Text>
      </View>
      <View>
        <HeaderRight />
      </View>
    </View>
  )
}

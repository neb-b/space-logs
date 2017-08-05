// @flow

import React from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { prepareDreamBuilder } from '../redux/actions/dream-builder.actions'
import moment from 'moment'
import Screen from './internal/screen'
import TabIcon from './internal/tab-icon'
import HeaderButton from './internal/header-button'

class ViewDreamScreen extends React.Component {
  static navigationOptions = props => {
    const { navigation } = props
    console.log('nav ', props)
    const { dream, prepareDreamBuilder } = navigation.state.params
    return {
      title: moment(dream.dateCreated).format('MMM Do'),
      headerRight: (
        <HeaderButton
          type="Edit"
          onPress={() => {
            // populate the dreamBuilder state then navigate
            prepareDreamBuilder(dream)
            navigation.navigate('DreamBuilder')
          }}
        />
      ),
    }
  }

  componentDidMount() {
    const { navigation, prepareDreamBuilder } = this.props
    navigation.setParams({
      prepareDreamBuilder,
    })
  }

  render() {
    console.log('view dreqm', this.props)
    const { navigation: { state: { params: { dream } } } } = this.props
    console.log('??', dream)
    return (
      <Screen scroll>
        <Text>
          {dream.dreamOptions.wasLucid ? 'Was lucid' : 'Not lucid'}
        </Text>
        <Text>
          {dream.text}
        </Text>
      </Screen>
    )
  }
}

export default connect(null, { prepareDreamBuilder })(ViewDreamScreen)

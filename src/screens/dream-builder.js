// @flow
import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import Screen from './internal/screen'
import DreamBuilder from '../components/dream-builder'
import Modal from 'react-native-modal'

import {
  updateDreamText,
  editDate,
  updateDreamOptions,
  toggleEditDate,
  updateDreamDate,
} from '../redux/actions/dream-builder'
import DreamBuilderHeader from './header/dream-builder-header.connected'
import DateChanger from '../components/dream-builder/date-changer'
import styles from '../components/dream-builder/styles'
class DreamBuilderScreen extends React.Component {
  static navigationOptions = props => {
    const { navigation } = props

    return {
      title: 'New Dream',
      path: 'dreams/new',
      header: <DreamBuilderHeader navigation={navigation} />,
    }
  }

  render() {
    const { dreamBuilder: { showDateModal } } = this.props
    return (
      <View style={{ flex: 1 }}>
        <DateChanger {...this.props} />
        <DreamBuilder {...this.props} />
      </View>
    )
  }
}

export default connect(({ dreamBuilder }) => ({ dreamBuilder }), {
  updateDreamText,
  editDate,
  updateDreamOptions,
  toggleEditDate,
  updateDreamDate,
})(DreamBuilderScreen)

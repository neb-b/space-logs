// @flow

import React from 'react'
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  DeviceEventEmitter,
} from 'react-native'
import { connect } from 'react-redux'
import { populateDreamBuilder } from '../redux/actions/dream-builder'
import moment from 'moment'
import Screen from './internal/screen'
import TabIcon from './internal/tab-icon'
import HeaderButton from './internal/header-button'
import ViewDream from '../components/view-dream'

class ViewDreamScreen extends React.Component {
  static navigationOptions = props => {
    const { navigation } = props
    const { dream = {}, populateDreamBuilder } = navigation.state.params
    const title = moment(dream.dateCreated).format('MMM Do')

    return {
      title,
      headerRight: (
        <HeaderButton
          type="Edit"
          onPress={() => {
            // populate the dreamBuilder state then navigate
            populateDreamBuilder(dream)
            navigation.navigate('DreamBuilder')
          }}
        />
      ),
    }
  }

  componentWillMount() {
    /*
      Everything would be so much easier if the header re-rendered with state changes
      I need a way to setParams with updated state after saving a dream
      In components/dream-builder/header-actions (maybe this should live somewhere else)

        saveDream() //update dream reducer with current dreamBuilder values
        navigation.goBack(screenId)
        setTimeout(() => {
          DeviceEventEmitter.emit('saveDreamBuilder')
        }, 0)
    */

    DeviceEventEmitter.addListener(
      'saveDreamBuilder',
      this.updateNavParams.bind(this)
    )
  }

  updateNavParams() {
    const { navigation, dream } = this.props
    navigation.setParams({ dream })
  }

  componentDidMount() {
    const { navigation, populateDreamBuilder, dream } = this.props
    navigation.setParams({
      populateDreamBuilder,
      dream,
    })
  }

  render() {
    return (
      <Screen scroll>
        <ViewDream {...this.props.dream} />
      </Screen>
    )
  }
}

const mapStateToProps = ({ dream }) => ({ dream })

export default connect(mapStateToProps, { populateDreamBuilder })(
  ViewDreamScreen
)

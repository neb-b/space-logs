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
import ConnectedHeaderButton from './internal/view-dream-actions'

class ViewDreamScreen extends React.Component {
  static navigationOptions = props => {
    console.log('navigationOptions', props)

    /*
      want to write this down somewhere.
      currently, "goBack" from the dream builder does not trigger a re-render of the screen
    */

    const { navigation } = props
    const { dream = {}, populateDreamBuilder } = navigation.state.params
    const title = moment(dream.dateCreated).format('MMM Do')

    // maybe i should add this to the navigation like I did with dream ^
    // then I wouldn't have to render once before I the helper is added

    return {
      title,
      headerRight: (
        <ConnectedHeaderButton
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
    DeviceEventEmitter.addListener(
      'saveDreamBuilder',
      this.forceRender.bind(this)
    )
  }

  componentDidMount() {
    const { navigation, populateDreamBuilder, dream } = this.props
    navigation.setParams({
      populateDreamBuilder,
      dream,
    })
  }

  forceRender() {
    console.log('forceRender', this.props)
    const { navigation, dream } = this.props
    navigation.setParams({
      dream,
    })
  }

  render() {
    console.log('ViewDream render', this.props)
    const { dreamOptions, text } = this.props.dream
    const { wasLucid, wasRecurrent, wasNightmare } = dreamOptions
    return (
      <Screen scroll>
        <Text>
          {wasLucid ? 'Was lucid' : 'Not lucid'}
        </Text>
        <Text>
          {wasNightmare ? 'Was nightmare' : 'Not nightmare'}
        </Text>
        <Text>
          {wasRecurrent ? 'Was recurrent' : 'Not recurrent'}
        </Text>
        <Text>
          {text}
        </Text>
      </Screen>
    )
  }
}

const mapStateToProps = ({ dream }) => ({ dream })

export default connect(mapStateToProps, { populateDreamBuilder })(
  ViewDreamScreen
)

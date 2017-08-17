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
import moment from 'moment'
import Screen from './internal/screen'
import ViewDream from '../components/view-dream'
import ViewDreamHeader from './header/view-dream-header.connected'
class ViewDreamScreen extends React.Component {
  static navigationOptions = props => {
    const { navigation } = props

    return {
      header: <ViewDreamHeader navigation={navigation} />,
    }
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

export default connect(mapStateToProps)(ViewDreamScreen)

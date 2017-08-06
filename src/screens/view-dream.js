// @flow

import React from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { populateDreamBuilder } from '../redux/actions/dream-builder'
import moment from 'moment'
import Screen from './internal/screen'
import TabIcon from './internal/tab-icon'
import HeaderButton from './internal/header-button'

class ViewDreamScreen extends React.Component {
  static navigationOptions = props => {
    console.log('ViewDream navigationOptions', props)
    const { navigation } = props
    const { dream } = navigation
    const title = moment(dream.dateCreated).format('MMM Do')

    // maybe i should add this to the navigation like I did with dream ^
    // then I wouldn't have to render once before I the helper is added
    const { populateDreamBuilder } = navigation.state.params

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

  componentDidMount() {
    const { navigation, populateDreamBuilder } = this.props
    navigation.setParams({
      populateDreamBuilder,
    })
  }

  render() {
    console.log('ViewDream render', this.props)
    const { dreamOptions, text } = this.props.dream
    const { wasLucid } = dreamOptions
    return (
      <Screen scroll>
        <Text>
          {wasLucid ? 'Was lucid' : 'Not lucid'}
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

// @flow
import React from 'react'
import { connect } from 'react-redux'
import Screen from './internal/screen'
import DreamBuilder from '../components/dream-builder'
import {
  updateDreamText,
  updateDreamOptions,
} from '../redux/actions/dream-builder'
import DreamBuilderHeader from './headers/dream-builder-header.connected'

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
    return <DreamBuilder {...this.props} />
  }
}

export default connect(({ dreamBuilder }) => ({ dreamBuilder }), {
  updateDreamText,
  updateDreamOptions,
})(DreamBuilderScreen)

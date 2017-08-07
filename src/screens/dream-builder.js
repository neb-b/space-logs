// @flow
import React from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Screen from './internal/screen'
import HeaderButton from './internal/header-button'
import DreamBuilderView from '../components/dream-builder'
import {
  toggleDreamEditText,
  updateDreamText,
  saveDream,
  cancelCreateDream,
  updateDreamOptions,
} from '../redux/actions/dream-builder'
import DreamBuilderHeader from './internal/dream-builder-header'
import styles from '../components/dream-builder/styles'

class NewDreamScreen extends React.Component {
  static navigationOptions = props => {
    const { navigation } = props
    //ideally this would default to an empty object...
    const { params = {} } = navigation.state
    const { saveDream, cancelCreateDream, screenId } = params

    return {
      title: 'New Dream',
      path: 'dreams/new',
      header: (
        <DreamBuilderHeader
          navigation={navigation}
          saveDream={saveDream}
          cancelCreateDream={cancelCreateDream}
          screenId={screenId}
        />
      ),
    }
  }

  componentDidMount() {
    const {
      navigation,
      saveDream,
      cancelCreateDream,
      nav: { screenId },
    } = this.props
    navigation.setParams({
      saveDream,
      cancelCreateDream,
      screenId,
    })
  }

  render() {
    return <DreamBuilderView {...this.props} />
  }
}

const mapStateToProps = ({ nav, dreamBuilder }) => {
  // I'm not sure why react-navigation doesn't give you the screen key
  // Need to pass it so the 'cancel' back button works properly
  const routes = nav.routes
  let screenId
  for (let i = 0; i < routes.length; i++) {
    if (routes[i].routeName === 'DreamBuilder') {
      screenId = routes[i].key
      break
    }
  }

  return {
    nav: Object.assign({}, nav, { screenId }),
    dreamBuilder,
  }
}

export default connect(mapStateToProps, {
  toggleDreamEditText,
  updateDreamText,
  saveDream,
  cancelCreateDream,
  updateDreamOptions,
})(NewDreamScreen)

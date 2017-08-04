// @flow
import React from 'react'
import { Text, View, Button } from 'react-native'
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
} from '../redux/actions/dream-builder.actions'

class NewDreamScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'New Dream',
    path: 'dreams/new',
    header: null,
  })

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
    if (routes[i].routeName === 'NewDream') {
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

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
import Screen from './internal/screen'
import HeaderButton from './internal/header-button'
import DreamBuilder from '../components/dream-builder'
import {
  toggleDreamEditText,
  updateDreamText,
  saveDream,
  cancelDream,
  updateDreamOptions,
} from '../redux/actions/dream-builder'
import Stars from '../components/stars'
import styles from '../components/dream-builder/styles'

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
const DreamBuilderHeader = connect(mapStateToProps, {
  saveDream,
  cancelDream,
})(props => {
  const { saveDream, cancelDream, navigation, dreamBuilder, nav } = props
  console.log('header', props)
  return (
    <View style={styles.headerWrapper}>
      <Stars height={80} />
      <View style={styles.headerActions}>
        <TouchableOpacity
          onPress={() => {
            cancelDream()
            navigation.goBack(nav.screenId)
          }}
          style={[styles.headerActionBtn, styles.cancel]}
        >
          <Text style={styles.headerActionText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            saveDream(dreamBuilder)
            navigation.goBack(nav.screenId)

            // After going back, emit this event which I am listening for on view-dream screen
            // the setTimeout is for a weird issue where the state is update, but in this.props inside
            // the event listener it is referencing the old state
            setTimeout(() => {
              DeviceEventEmitter.emit('saveDreamBuilder')
            }, 0)
          }}
          style={[styles.headerActionBtn, styles.save]}
        >
          <Text style={styles.headerActionText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
})

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
  toggleDreamEditText,
  updateDreamText,
  updateDreamOptions,
})(DreamBuilderScreen)

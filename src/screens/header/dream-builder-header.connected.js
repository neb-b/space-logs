import React from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  DeviceEventEmitter,
} from 'react-native'
import { saveDream, cancelDream } from '../../redux/actions/dream-builder'
import Stars from '../../components/stars'
import styles from '../../components/dream-builder/styles'

const DreamBuilderHeader = props => {
  const { saveDream, cancelDream, navigation, dreamBuilder, nav } = props
  console.log('save', dreamBuilder)
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
          }}
          style={[styles.headerActionBtn, styles.save]}
        >
          <Text style={styles.headerActionText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
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
  saveDream,
  cancelDream,
})(DreamBuilderHeader)

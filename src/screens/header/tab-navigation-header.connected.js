import React from 'react'
import { connect } from 'react-redux'
import {
  View,
  Button,
  TouchableOpacity,
  DeviceEventEmitter,
} from 'react-native'
import { populateDreamBuilder } from '../../redux/actions/dream-builder'
import { confirmDeleteDream } from '../../redux/actions/dream'
import Text from '../../components/common/text'
import moment from 'moment'
import Header from './header'
import ViewDream from '../../components/view-dream'
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

const DreamBuilderHeader = props => {
  const { populateDreamBuilder, navigation, title } = props

  return (
    <Header
      title={title}
      headerRight={() =>
        <View style={styles.headerBtnsWrapper}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate('DreamBuilder')}
          >
            <Icon name="edit" color="#f7ff62" size={30} />
          </TouchableOpacity>
        </View>}
    />
  )
}

const mapStateToProps = ({ dream }) => ({ dream })
export default connect(mapStateToProps, {
  confirmDeleteDream,
  populateDreamBuilder,
})(DreamBuilderHeader)

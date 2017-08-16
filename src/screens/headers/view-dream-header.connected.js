import React from 'react'
import { connect } from 'react-redux'
import {
  View,
  Button,
  TouchableOpacity,
  DeviceEventEmitter,
} from 'react-native'
import { populateDreamBuilder } from '../../redux/actions/dream-builder'
import { deleteDream } from '../../redux/actions/dream'
import Text from '../../components/common/text'
import moment from 'moment'
import HeaderButton from './header-button'
import Screen from '../internal/screen'
import TabIcon from '../internal/tab-icon'
import ViewDream from '../../components/view-dream'
import styles from '../../components/dream-builder/styles'

const DreamBuilderHeader = props => {
  const { saveDream, deleteDream, navigation, dream, nav } = props
  const title = moment(dream.dateCreated).format('MMM Do')

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 30,
        backgroundColor: '#161616',
      }}
    >
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: '#fff', fontSize: 16 }}>Back</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 20,
            fontFamily: 'Futura-Medium',
            marginTop: -5,
            color: '#fff',
          }}
        >
          {title}
        </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <HeaderButton
          text="Delete"
          onPress={() => {
            deleteDream(dream.id)
            navigation.goBack()
          }}
        />
        <HeaderButton
          text="Edit"
          onPress={() => {
            populateDreamBuilder(dream)
            navigation.navigate('DreamBuilder')
          }}
        />
      </View>
    </View>
  )
}

const mapStateToProps = ({ dream }) => ({ dream })
export default connect(mapStateToProps, {
  deleteDream,
  populateDreamBuilder,
})(DreamBuilderHeader)

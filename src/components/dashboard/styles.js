import { StyleSheet, Dimensions } from 'react-native'

const { width: WIDTH } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
  },

  dreamWrapper: {
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 30,
    overflow: 'hidden',
    borderBottomWidth: 1,
    borderBottomColor: '#39356c80',
  },

  date: {
    color: '#aa7cff',
    fontSize: 18,
  },

  dreamInfoWrapper: {
    flexDirection: 'row',
  },

  dreamOptionsWrapper: {
    flexDirection: 'row',
    paddingLeft: 20,
  },

  dreamOptionText: {
    fontSize: 14,
    color: '#f5f5f5',
    paddingLeft: 10,
  },

  wasLucid: {
    color: '#fcf658',
  },
  wasNightmare: {
    color: '#7a94ff',
  },
  wasRecurrent: {
    color: '#f6a63b',
  },
  dreamTextWrapper: {
    maxHeight: 250,
  },
  dreamText: {
    fontSize: 16,
    marginTop: 20,
    color: '#f5f5f5',
  },
})

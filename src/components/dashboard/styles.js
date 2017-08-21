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
    flexDirection: 'row',
    marginBottom: 20,
    paddingTop: 20,
    paddingBottom: 40,
    overflow: 'hidden',
    borderBottomWidth: 1,
    borderBottomColor: '#39356c80',
  },

  date: {
    color: '#aa7cff',
    fontSize: 18,
  },

  dreamOptionsWrapper: {
    flexDirection: 'row',
  },

  dreamOptionText: {
    fontSize: 14,
    color: '#f5f5f5',
    paddingLeft: 10,
    paddingBottom: 10,
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
    color: '#f5f5f5',
    paddingLeft: 10,
  },
})

import { StyleSheet, Dimensions } from 'react-native'

const { width: WIDTH } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // backgroundColor: '#161616',
  },

  dreamWrapper: {
    marginBottom: 30,
    maxHeight: 150,
    overflow: 'hidden',
    borderBottomWidth: 1,
    borderBottomColor: '#887efb80',
  },

  date: {
    color: '#aa7cff',
  },

  dreamOption: {
    fontSize: 14,
    color: '#f5f5f5',
  },

  dreamText: {
    fontSize: 16,
    marginTop: 20,
    color: '#f5f5f5',
  },
})

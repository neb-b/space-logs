import { StyleSheet, Dimensions } from 'react-native'

const { width: WIDTH } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // backgroundColor: '#161616',
  },

  dreamOptions: {
    borderBottomWidth: 1,
    borderBottomColor: '#887efb80',
  },
  dreamOption: {
    fontSize: 14,
    marginBottom: 10,
    color: '#f5f5f5',
  },

  dreamText: {
    fontSize: 16,
    marginTop: 20,
    color: '#f5f5f5',
  },
})

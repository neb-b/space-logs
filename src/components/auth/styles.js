import { StyleSheet, Dimensions } from 'react-native'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    height: '100%',
  },

  login: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 250,
    width: 150,
    height: 70,
    backgroundColor: '#19b3db',
    borderRadius: 10,
  },
  loginText: {
    fontSize: 16,
  },

  authButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    width: 190,
    height: 50,
    padding: 20,
    backgroundColor: '#19b3db',
    borderRadius: 10,
  },
})

import { StyleSheet, Dimensions } from 'react-native'

const { width: WIDTH } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
  },
  star: {
    position: 'absolute',
  },

  newDreamWrapper: {
    alignItems: 'center',
  },

  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },

  headerActionBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 90,
    height: 40,
  },

  cancel: {
    backgroundColor: '#eb4c4c',
  },
  save: {
    backgroundColor: '#2dc376',
  },

  headerActionText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 20,
  },

  question: {
    marginTop: 80,
    fontSize: 32,
    color: '#fff48f',
    backgroundColor: '#161616',
    fontWeight: '900',
  },

  questionAction: {
    height: 70,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#d0b1f9',
    borderRadius: 10,
  },

  questionActionText: {
    fontSize: 28,
    fontWeight: '900',
    color: '#161616',
  },

  yesButton: {
    marginTop: 50,
  },
})

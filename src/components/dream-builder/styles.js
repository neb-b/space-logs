import { StyleSheet, Dimensions } from 'react-native'

const { width: WIDTH } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#161616',
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

  textEditor: {
    flex: 1,
  },

  dreamBuilder: {
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    width: '100%',
    height: '100%',
  },
  dreamActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  whatHappened: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  whatHappenedText: {
    color: '#f6f6f6',
    fontSize: 24,
  },

  otherInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fcf658',
  },
  otherInfoText: {
    fontSize: 16,
    color: '#fcf658',
  },

  inputContainer: {},

  input: {
    marginTop: 15,
    paddingBottom: 50,
    // borderColor: '#fff',
    // borderWidth: 1,
    color: '#fcfcfc',
    fontSize: 15,
  },
})

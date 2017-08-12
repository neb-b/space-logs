import { StyleSheet, Dimensions } from 'react-native'

const { width: WIDTH } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#161616',
  },

  newDreamWrapper: {
    alignItems: 'center',
  },

  dreamBuilder: {
    marginTop: 80,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    width: '100%',
    height: '100%',
  },

  topItems: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
  },

  dreamDate: {
    fontSize: 16,
    color: '#f7f7f7',
  },

  dreamOptionBtn: {
    borderWidth: 2,
    borderRadius: 10,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 8,
    paddingRight: 8,
    borderColor: '#fcf658',
    marginRight: 20,
  },

  dreamOptionBtnText: {
    color: '#fcf658',
    fontSize: 14,
  },

  wasLucidActive: {
    backgroundColor: '#fcf658',
  },

  wasLucidActiveText: {
    color: '#0f0f0f',
  },

  dreamActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 25,
  },

  whatHappened: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  whatHappenedText: {
    color: '#f6f6f6',
    fontSize: 30,
  },

  otherInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    // borderWidth: 2,
    // borderColor: '#fcf658',
    backgroundColor: '#b134fe',
  },
  otherInfoText: {
    fontSize: 16,
    color: '#fcfcfc',
  },

  inputContainer: {},

  input: {
    marginTop: 10,
    paddingBottom: 50,
    // borderColor: '#fff',
    // borderWidth: 1,
    color: '#fcfcfc',
    fontSize: 15,
  },
})

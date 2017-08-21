import { StyleSheet, Dimensions } from 'react-native'

const { width: WIDTH } = Dimensions.get('window')

export default StyleSheet.create({
  headerWrapper: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
    backgroundColor: 'transparent',
    zIndex: 100,
  },

  headerActions: {
    marginTop: 30,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  input: {
    marginTop: 10,
    paddingBottom: 30,
    // borderColor: '#fff',
    // borderWidth: 1,
    color: '#fcfcfc',
    fontSize: 15,
    minHeight: 200,
  },
})

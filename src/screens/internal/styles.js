import { StyleSheet } from 'react-native'

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
})

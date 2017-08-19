import { StyleSheet, Dimensions } from 'react-native'

const { width: WIDTH } = Dimensions.get('window')

const headerItemWidth = () => {
  return (WIDTH - 20) / 3
}

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 25,
    // uneven paddings because of weird icon sizes
    // hmmmm
    paddingRight: 5,
    paddingLeft: 10,
    paddingBottom: 20,
    backgroundColor: '#161616',
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    fontFamily: 'Futura-Medium',
    color: '#fff',
    textAlign: 'center',
  },
  headerItem: {
    width: headerItemWidth(),
  },
  headerRight: {
    alignItems: 'flex-end',
  },
  editButton: {
    paddingLeft: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    alignSelf: 'center',
  },

  headerBtnsWrapper: { flexDirection: 'row' },
  backIcon: { marginLeft: -10 },
  backWrapper: { flexDirection: 'row', alignItems: 'center' },
})

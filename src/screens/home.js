import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const MainScreen = ({dispatch}) => (
  <View style={styles.container}>
    <Button
      onPress={() =>
        dispatch(NavigationActions.navigate({ routeName: 'NewDream' }))}
      title="New Dream"
    />
  </View>
);

MainScreen.navigationOptions = {
  title: 'Dreams',
};

// why do I need to connect?
// not sure if there is a better way to pass down dispatch
export default connect(s => s)(MainScreen);

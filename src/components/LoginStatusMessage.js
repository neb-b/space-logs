import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const LoginStatusMessage = ({ dispatch }) => {
  return (
    <View>
      <Button
        onPress={() =>
          dispatch(NavigationActions.navigate({ routeName: 'Profile' }))}
        title="Profile"
      />
    </View>
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(LoginStatusMessage);

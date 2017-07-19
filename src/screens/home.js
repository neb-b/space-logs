import React from 'react';
import { Text, View, Button } from 'react-native';
import Screen from "./internal/screen";

class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Dreams',
    headerRight: (
      <Button
        title="New Dream"
        onPress={() => navigation.navigate('NewDream')}
      />
    ),
  })

  render() {
    return (
      <Screen scroll>
        <Text>Dreams</Text>
      </Screen>
    );
  }
}

export default SettingsScreen;

import React from 'react';
import { Text, View, Button } from 'react-native';
import Screen from "./internal/screen";

class StatsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Stats',
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
        <Text>Stats</Text>
      </Screen>
    );
  }
}

export default StatsScreen;

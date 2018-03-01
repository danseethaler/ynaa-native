import React from 'react';
import {Dimensions} from 'react-native';
import {Font} from 'expo';
import {ThemeProvider} from 'glamorous-native';
import {StackNavigator} from 'react-navigation';

import Landing from './src/screens/Landing';
import Wizard from './src/screens/Wizard';

const Navigator = StackNavigator({
  Home: {screen: Landing, navigationOptions: {header: null}},
  Wizard: {screen: Wizard, navigationOptions: {header: null}},
});

var {height, width} = Dimensions.get('window');

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async componentWillMount() {
    await Font.loadAsync({});

    this.setState({fontsLoaded: true});
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }
    return (
      <ThemeProvider
        theme={{
          colors: {
            primary: '#25384f',
            secondary: '#00bcd4',
          },
          dimensions: {height, width},
        }}
      >
        <Navigator />
      </ThemeProvider>
    );
  }
}

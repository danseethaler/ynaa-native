import React from 'react';
import {Dimensions} from 'react-native';
import {Font} from 'expo';
import RootNavigator from './src/config/Navigator';

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
    return <RootNavigator />;
  }
}

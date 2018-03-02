import {StackNavigator} from 'react-navigation';

import Landing from '../screens/Landing';
import Wizard from '../screens/Wizard';
import Intro from '../screens/Intro';

const Navigator = StackNavigator(
  {
    Home: {screen: Landing},
    Wizard: {screen: Wizard},
  },
  {
    headerMode: 'none',
  }
);

export default StackNavigator(
  {
    Home: Navigator,
    Intro: {screen: Intro},
  },
  {
    headerMode: 'none',
    mode: 'modal',
    // initialRouteName: 'Intro',
  }
);

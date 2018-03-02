import * as React from 'react';
import {StackNavigator} from 'react-navigation';
import {View} from 'react-native';

import {Container} from '../bits/Containers';
import {Button} from '../bits/Buttons';
import Logo from '../components/Logo';

export default ({navigation}) => (
  <Container outer>
    <Container style={{flex: 1, alignItems: 'center'}}>
      <Logo />
    </Container>
    <Container>
      <Button
        text="Get Started"
        primary
        full
        padBottom
        onPress={() => {
          navigation.navigate('Wizard');
        }}
      />
      <Button
        text="Learn More"
        full
        secondary
        onPress={() => {
          navigation.navigate('Intro');
        }}
      />
    </Container>
  </Container>
);

import React from 'react';
import {View} from 'react-native';

import {Container} from '../bits/Containers';
import {Button} from '../bits/Buttons';
import Logo from '../components/Logo';

export default () => (
  <Container>
    <View
      style={{
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'space-around',
      }}
    >
      <Logo />
    </View>
    <View
      style={{
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <Button
        text="Get Started"
        primary
        full
        onPress={() => {
          console.log('rockon');
        }}
      />
      <Button
        text="Learn More"
        full
        secondary
        onPress={() => {
          console.log('rockon');
        }}
      />
    </View>
  </Container>
);

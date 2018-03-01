import React from 'react';
import {Image} from 'react-native';

import {Button} from '../bits/Buttons';
import {Container} from '../bits/Containers';
import {Header, Text} from '../bits/Text';

export default ({navigation}) => (
  <Container outer>
    <Container
      style={{
        padding: 20,
        flexGrow: 1,
      }}
    >
      <Header style={{marginTop: 30}}>Welcome.</Header>
      <Container
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Image
          source={require('../assets/bank.png')}
          style={{
            width: 70,
            height: 70,
          }}
        />
        <Text
          style={{
            marginLeft: 20,
          }}
        >
          Grab your recent bank statements and let's get started.
        </Text>
      </Container>
    </Container>
    <Container>
      <Button
        primary
        full
        onPress={() => {
          navigation.goBack();
        }}
        text="Got 'em ->"
      />
    </Container>
  </Container>
);

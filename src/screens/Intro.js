import React from 'react';
import {FlatList, Image, View} from 'react-native';

import {Button} from '../bits/Buttons';
import {Container} from '../bits/Containers';
import {Header, Text} from '../bits/Text';
import {colors} from '../config/styles';

export default ({navigation, ...rest}) => (
  <Container outer>
    <Header style={{marginVertical: 30}}>The problem with budgets...</Header>
    <Text style={{marginBottom: 20}}>
      Budgets are the classic approach to money management. But there are lots
      of problems with budgets:
    </Text>
    <FlatList
      data={[{key: `Historical`}, {key: `Dozens of categories`}]}
      renderItem={({item}) => (
        <View
          style={{
            borderLeftWidth: 3,
            borderColor: colors.danger,
            paddingLeft: 10,
            marginBottom: 5,
          }}
        >
          <Text>{item.key}</Text>
        </View>
      )}
    />
    <Container
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch',
      }}
    >
      <Button tertiary fill onPress={() => navigation.goBack()} text="Exit" />
      <View style={{width: 10}} />
      <Button primary fill onPress={() => navigation.goBack()} text="Next" />
    </Container>
  </Container>
);

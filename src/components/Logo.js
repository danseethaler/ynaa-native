import React from 'react';
import {View} from 'react-native';
import glamorous from 'glamorous-native';

import {mapper, colors} from '../config/styles';

const Heading = glamorous.text(
  {
    fontSize: 75,
    lineHeight: 90,
    fontWeight: '700',
    fontFamily: 'Al Nile',
  },
  mapper({
    inverted: {
      color: colors.white,
    },
    secondary: {
      color: colors.secondary,
    },
    _default: {
      color: colors.primary,
    },
  })
);

export default props => (
  <View>
    <Heading {...props}>
      YNAA
      <Heading secondary>.</Heading>
    </Heading>
  </View>
);

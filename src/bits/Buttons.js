// https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886
import React from 'react';
import {View, Text} from 'react-native';
import glamorous from 'glamorous-native';
import {SPACER_PADDING, mapper, colors} from '../config/styles';

const buttonStyles = [
  {
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 16,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  mapper({
    full: {
      alignSelf: 'stretch',
    },
    padBottom: {
      marginBottom: SPACER_PADDING,
    },
    padTop: {
      marginTop: SPACER_PADDING,
    },
    fill: {
      flex: 1,
    },
    primary: {
      backgroundColor: colors.primary,
    },
    secondary: {
      borderColor: colors.secondary,
    },
    tertiary: {
      backgroundColor: colors.white,
      borderWidth: 0,
    },
  }),
];

const ButtonHighlight = glamorous.touchableHighlight.apply(null, buttonStyles);
const ButtonOpacity = glamorous.touchableOpacity.apply(null, buttonStyles);

const ButtonText = glamorous.text(
  {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 18,
  },
  mapper({
    primary: {
      color: colors.white,
    },
    secondary: {
      color: colors.secondary,
    },
    tertiary: {
      color: colors.gray,
      opacity: 0.7,
    },
  })
);

export const Button = ({text, ...props}) => {
  const Button = props.tertiary ? ButtonOpacity : ButtonHighlight;

  return (
    <Button
      {...mapper({
        primary: {
          underlayColor: colors.primary,
        },
        secondary: {
          underlayColor: 'rgba(0, 0, 0, 0)',
          activeOpacity: 0.5,
        },
      })(props)}
      {...props}
    >
      <ButtonText {...props}>{text}</ButtonText>
    </Button>
  );
};

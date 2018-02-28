// https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886
import React from 'react';
import glamorous from 'glamorous-native';
import {SPACER_PADDING, mapper, colors} from '../config/styles';

const ButtonContainer = glamorous.touchableHighlight(
  {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    paddingVertical: 16,
    paddingHorizontal: 25,
    marginBottom: SPACER_PADDING,
  },
  ({theme, full}) => {
    const styles = {};

    if (full) {
      styles.width = theme.dimensions.width - SPACER_PADDING * 2;
    }
    return styles;
  },
  mapper({
    primary: {
      backgroundColor: colors.primary,
    },
    secondary: {
      backgroundColor: colors.white,
      borderWidth: 2,
      borderColor: colors.secondary,
    },
    tertiary: {
      backgroundColor: colors.white,
      borderWidth: 0,
    },
  })
);

const ButtonText = glamorous.text(
  {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 16,
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

export const Button = ({text, ...props}) => (
  <ButtonContainer {...props}>
    <ButtonText {...props}>{text}</ButtonText>
  </ButtonContainer>
);

import glamorous from 'glamorous-native';
import {colors, mapper} from '../config/styles';

export const Container = glamorous.view(
  {
    display: 'flex',
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  mapper({
    outer: {
      flex: 1,
      padding: 20,
    },
  })
);

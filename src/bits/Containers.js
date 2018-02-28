import glamorous from 'glamorous-native';
import {colors} from '../config/styles';

export const Container = glamorous.view({
  display: 'flex',
  flexGrow: 1,
  backgroundColor: colors.white,
  alignItems: 'center',
  justifyContent: 'center',
});

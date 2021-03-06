import glamorous from 'glamorous-native';
import {colors} from '../config/styles';

export const Header = glamorous.text({
  fontSize: 42,
  color: colors.gray,
});

export const Text = glamorous.text({
  fontSize: 22,
  color: colors.bodyText,
});

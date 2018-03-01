export const SPACER_PADDING = 10;

export const colors = {
  success: '#29A88E',
  white: '#FFFFFF',
  danger: '#C65F4A',
  primary: '#6DCFD3',
  info: '#FFD035',
  gray: '#5A6E73',
  bodyText: '#696969',
  secondary: '#00bcd4',
  primary: '#25384f',
};

export const mapper = ob => props => {
  const matches = Object.keys(ob).filter(key => !!props[key]);

  if (matches.length === 0) {
    return ob._default || null;
  }

  return matches.reduce((styles, key) => ({...styles, ...ob[key]}), {});
};

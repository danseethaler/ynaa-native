export const SPACER_PADDING = 10;

export const colors = {
  success: '#29A88E',
  white: '#FFFFFF',
  danger: '#C65F4A',
  primary: '#6DCFD3',
  info: '#FFD035',
  gray: '#5A6E73',
  secondary: '#00bcd4',
  primary: '#25384f',
};

export const mapper = ob => props => {
  const match = Object.keys(ob).find(key => {
    if (props[key]) {
      return ob[key];
    }
  });

  return ob[match] || ob._default || null;
};

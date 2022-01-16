const black = '#222222';
const red = '#FF5C5C';
const yellow = '#F8BF00';

const colors = {
  blacks: {
    5: '#fafafa',
    10: '#d8d8d8',
    20: '#bbb',
    30: '#999',
    40: '#7a7a7a',
    50: '#525252',
    60: '#3d3d3d',
    90: black,
  },
  blue: '#007ce0',
  navy: '#004175',
  reds: {
    30: red,
  },
  yellows: {
    30: yellow,
  },
  black,
  red,
  yellow,
};

colors.textColor = colors.black;

const space = [0, 5, 10, 15, 20, 25, 30, 35, 40];

const fontSizes = [12, 14, 16, 18];

const breakpoints = ['600px', '800px', '1000px', '1200px'];

const fontWeights = {
  light: 200,
  thin: 300,
  normal: 400,
  bold: 700,
  black: 900,
};

const fontStack = 'Comic Sans, -apple-system, BlinkMacSystemFont, sans-serif';

const fontFamilies = {
  body: fontStack,
  heading: fontStack,
};

const main = 'blue';

export default {
  colors,
  space,
  fontSizes,
  fontWeights,
  fontFamilies,
  main,
  breakpoints,
};

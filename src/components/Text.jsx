import styled from 'styled-components';
import { system } from 'styled-system';

const Text = styled('div')(
  system({
    fontSize: {
      property: 'fontSize',
      scale: 'fontSizes',
      defaultScale: [12, 14, 16, 20, 24, 32, 48],
    },
    lineHeight: {
      property: 'lineHeight',
      scale: 'lineHeights',
    },
    // shorthand definition
    textAlign: true,
  }),
);

export default Text;

import styled from 'styled-components';
import { variant } from 'styled-system';

const VariantButton = styled('button')(
  {
    fontFamily: 'inherit',
  },
  variant({
    prop: 'button-type',
    variants: {
      primary: {
        color: 'red',
        bg: 'green',
        padding: 20,
      },
      secondary: {
        color: 'black',
        bg: 'blue',
        padding: 10,
      },
    },
  }),
);

export default VariantButton;

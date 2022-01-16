import styled from 'styled-components';
import { compose, space, layout, color, system } from 'styled-system';

const Box = styled('div')(
  compose(space, layout, color),
  system({
    textDecoration: true,
  }),
);

export default Box;

import styled from 'styled-components';
import { compose, space, layout, color } from 'styled-system';

const Box = styled('div')(compose(layout, space, color));

export default Box;

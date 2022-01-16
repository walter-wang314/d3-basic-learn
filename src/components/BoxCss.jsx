import styled from 'styled-components';
import css from '@styled-system/css';
import Box from './Box';

const BoxCss = styled(Box)`
  ${css({
    fontSize: 30,
    lineHeight: '200px',
    textAlign: 'center',
    color: (props) => (props.primary ? 'gold' : 'blue'),
  })};
  height: 200px;
  background: orange;
`;

export default BoxCss;

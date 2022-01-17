import styled from 'styled-components';

const BoxWithConfig = styled.div
  .attrs({
    'data-testid': 'ContainerDiv',
    test: 'abc',
    'aria-test': 123,
    color: 'red',
    colors: 'green',
    colorslike: 'yellow',
  })
  .withConfig({
    componentId: 'ContainerId',
    displayName: 'ContainerName',
    shouldForwardProp: (prop, defaultValidatorFn) => {
      console.log('shouldForwardProp → prop: ', prop);
      return !'color'.startsWith(prop) && defaultValidatorFn(prop);
    },
  })`
  display: flex;
  width: 300px;
  height: 300px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-color: #eee;
`;

export default BoxWithConfig;

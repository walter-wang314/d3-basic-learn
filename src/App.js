import React from 'react';
import Box from './components/Box';
import Button from './components/Button';
import VariantButton from './components/VariantButton';
import BoxCss from './components/BoxCss';
import BoxWithConfig from './components/BoxWithConfig';
import './App.css';

function App() {
  return (
    <div className="App">
      <Box
        color="blue"
        bg={['red', 'gold', 'gray', 'pink']}
        width={[
          1, // 100% below the smallest breakpoint
          1 / 2, // 50% from the next breakpoint and up
          1 / 3,
          1 / 4, // 25% from the next breakpoint and up
        ]}
        px={[10, 40]}
        py={[10, 40]}
        textDecoration="underline"
      >
        Hello
      </Box>
      <div>
        <Button theme={{ main: 'red' }}>Button with default theme red</Button>
      </div>
      <div>
        <Button>Button with default theme palevioletred</Button>
      </div>
      <Box
        width={[100, 200, 300, 400]}
        height={[100, 200, 300, 400]}
        bg="blacks.60"
      />
      <br />
      <br />
      <br />
      <VariantButton button-type="primary">Primary</VariantButton>
      <br />
      <VariantButton button-type="secondary">Secondary</VariantButton>
      <br />
      <br />
      <br />
      <BoxCss>Hello</BoxCss>
      <br />
      <br />
      <br />
      <BoxWithConfig>BoxWithConfig</BoxWithConfig>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;

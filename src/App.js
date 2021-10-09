import React from 'react';
import Box from './components/Box';
import Button from './components/Button';
import VariantButton from './components/VariantButton';
import './App.css';

function App() {
    return (
        <div className="App">
            <Box
                color="blue"
                bg="tomato"
                width={[
                    1, // 100% below the smallest breakpoint
                    1 / 2, // 50% from the next breakpoint and up
                    1 / 4, // 25% from the next breakpoint and up
                ]}
                px={[3, 4]}
                py={[5, 6]}
                textDecoration="underline"
            >
                Hello
            </Box>
            <div>
                <Button theme={{ main: 'red' }}>
                    Button with default theme red
                </Button>
            </div>
            <div>
                <Button>Button with default theme palevioletred</Button>
            </div>
            <Box width={100} height={100} bg="blacks.60" />
            <br />
            <br />
            <br />
            <VariantButton button-type="primary">Primary</VariantButton>
            <br />
            <VariantButton button-type="secondary">Secondary</VariantButton>
        </div>
    );
}

export default App;

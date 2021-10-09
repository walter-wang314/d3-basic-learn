import React from 'react';
import Box from './components/Box';
import Button from './components/Button';
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
        </div>
    );
}

export default App;

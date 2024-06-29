import { Clock, TodoList, Header, SoundBoard } from './components';
import { Box, useColorMode, VStack } from '@chakra-ui/react';
import { GIFS, VIGNETTE, LINES } from './utils/constants';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const { colorMode } = useColorMode();
    const [bg, setBg] = useState(GIFS[(GIFS.length * Math.random()) | 0]);

    function handleKeyDown({ keyCode }) {
        // 'G' pressed, change BG
        if (keyCode === 71) setBg(GIFS[(GIFS.length * Math.random()) | 0]);
    }
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            <VStack
                className="content"
                spacing={4}
                filter={'blur(0.3px)'}
                _before={{
                    filter:
                        colorMode === 'light'
                            ? 'blur(8px) opacity(0.4)'
                            : 'blur(8px) brightness(0.5)',
                    backgroundImage: `url(${bg})`,
                }}
            >
                <Header />
                <Clock />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        padding: 'var(--chakra-space-8)',
                    }}
                >
                    <TodoList />
                    <SoundBoard />
                </Box>
            </VStack>
            <Box className="crt" sx={{ backgroundImage: `url(${LINES})` }} />
            <Box className="vignette" sx={{ backgroundImage: `url(${VIGNETTE})` }} />
        </>
    );
}

export default App;

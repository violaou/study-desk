import React from 'react'
import ReactDOM from 'react-dom/client'
import { Clock, TodoList, Header, SoundBoard } from './components'
import { Box, useColorMode, VStack } from '@chakra-ui/react'
import { GIFS, VIGNETTE, LINES } from './utils/constants'
import { useEffect, useState } from 'react'
import './index.css'
import {
  ChakraProvider,
  theme as chakraTheme,
  extendTheme,
  defineStyle,
  defineStyleConfig
} from '@chakra-ui/react'
import '@fontsource-variable/martian-mono'

const unselectable = defineStyle({
  userSelect: 'none'
})
export const headingTheme = defineStyleConfig({
  variants: {
    unselectable: unselectable
  }
})

const theme = extendTheme({
  fonts: {
    ...chakraTheme.fonts,
    heading: `"Martian Mono Variable", monospace`,
    subHeading: `"Martian Mono Variable", monospace`,
    body: `"Martian Mono Variable", monospace`,
    mono: `"Martian Mono Variable", monospace`
  },
  textStyles: {
    p: {
      'font-family': 'var(--chakra-fonts-body)'
    }
  },
  components: { Heading: headingTheme }
})

function App() {
  const { colorMode } = useColorMode()
  const [bg, setBg] = useState(GIFS[(GIFS.length * Math.random()) | 0])

  function handleKeyDown({ keyCode }: KeyboardEvent) {
    // 'G' pressed, change BG
    if (keyCode === 71) setBg(GIFS[(GIFS.length * Math.random()) | 0])
  }
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

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
          backgroundImage: `url(${bg})`
        }}
      >
        <Header />
        <Clock />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            padding: 'var(--chakra-space-8)'
          }}
        >
          <TodoList />
          <SoundBoard />
        </Box>
      </VStack>
      <Box className="crt" sx={{ backgroundImage: LINES }} />
      <Box className="vignette" sx={{ backgroundImage: VIGNETTE }} />
    </>
  )
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)

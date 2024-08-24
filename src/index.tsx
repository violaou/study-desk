import './index.css'
import '@fontsource-variable/martian-mono'

import { Box, Heading, useColorMode, VStack } from '@chakra-ui/react'
import {
  ChakraProvider,
  defineStyle,
  defineStyleConfig,
  extendTheme,
  theme as chakraTheme
} from '@chakra-ui/react'
import React from 'react'
import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import styled from 'styled-components'

import { Clock, Footer, Header, SoundBoard, TodoList } from './components'
import { GIFS, isDev, LINES, VIGNETTE } from './utils'

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

const StyledFooter = styled(Footer)`
  margin-top: auto;
`

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
      {isDev() && (
        <Heading size="4xl" noOfLines={1}>
          DEVMODE
        </Heading>
      )}
      <VStack
        className="content"
        spacing={4}
        filter={'blur(0.3px)'}
        height={'100vh'}
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
        <StyledFooter />
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

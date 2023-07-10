import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, theme as chakraTheme, extendTheme, defineStyle, defineStyleConfig } from '@chakra-ui/react'
import '@fontsource-variable/martian-mono'

const unselectable = defineStyle({
  userSelect: 'none',
})
export const headingTheme = defineStyleConfig({
  variants: {
    unselectable: unselectable,
  },
})

const theme = extendTheme({
  fonts: {
    ...chakraTheme.fonts,
    heading: `"Martian Mono Variable", monospace`,
    subHeading: `"Martian Mono Variable", monospace`,
    body: `"Martian Mono Variable", monospace`,
    mono: `"Martian Mono Variable", monospace`,
  },
  textStyles: {
    p: {
      'font-family': 'var(--chakra-fonts-body)',
    },
  },
  components: { Heading: headingTheme },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)

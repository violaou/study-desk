// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'
const theme = extendTheme({
  fonts: {
    heading: `'Martian Mono Variable', monospace`,
    body: `'Martian Mono Variable', sans-serif`,
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
  // </React.StrictMode>
)

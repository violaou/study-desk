// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// import { extendTheme } from '@chakra-ui/react'
// const colors = {
//   brand: {
//     900: '#1a365d',
//     800: '#153e75',
//     700: '#2a69ac',
//   },
// }
// const theme = extendTheme({ colors })
// <ChakraProvider theme={theme}>

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ChakraProvider>
    <App />
  </ChakraProvider>
  // </React.StrictMode>
)

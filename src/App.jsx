import { Clock, TodoList, Header, SoundBoard } from './components'
import { Box, useColorMode, VStack } from '@chakra-ui/react'
import { GIFS } from './assets/constants'
import './App.css'

function App() {
  const { colorMode } = useColorMode()
  const randomBgURL = GIFS[(GIFS.length * Math.random()) | 0]
  return (
    <VStack
      className='content'
      spacing={4}
      filter={'blur(0.3px)'}
      _before={{
        filter: colorMode === 'light' ? 'blur(10px) opacity(0.4)' : 'blur(10px) brightness(0.5)',
        backgroundImage: `URL(${randomBgURL})`,
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
  )
}

export default App

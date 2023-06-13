import { Clock, TodoList, Header, SoundBoard } from './components'
import { useColorMode, VStack } from '@chakra-ui/react'
import { GIFS } from './assets/constants'
import './App.css'

function App() {
  // const [loaded, setLoaded] = setState(false)
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
      <TodoList />
      <SoundBoard />
    </VStack>
  )
}

export default App

import Clock from './components/Clock'
import TodoList from './components/TodoList'
import Header from './components/Header'
import { useColorMode, VStack } from '@chakra-ui/react'
import './App.css'

function App() {
  const { colorMode } = useColorMode()
  return (
    <VStack
      className='content'
      spacing={4}
      filter={'blur(0.3px)'}
      _before={{ filter: colorMode === 'light' ? 'blur(10px) opacity(0.3)' : 'blur(10px) brightness(0.5)' }}
    >
      <Header />
      <Clock />
      <TodoList />
    </VStack>
  )
}

export default App

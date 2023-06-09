import Clock from './components/Clock'
import TodoList from './components/TodoList'
import Header from './components/Header'
import { StackDivider, VStack } from '@chakra-ui/react'
import './App.css'

function App() {
  return (
    <VStack spacing={4} divider={<StackDivider borderColor='gray.200' />}>
      <Header />
      <Clock />
      <TodoList />
    </VStack>
  )
}

export default App

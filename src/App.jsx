import Clock from './components/Clock'
import TodoList from './components/TodoList.jsx'
import { Heading, StackDivider, VStack } from '@chakra-ui/react'
import './App.css'

function App() {
  return (
    <VStack spacing={4} divider={<StackDivider borderColor='gray.200' />}>
      <Heading>study desk</Heading>
      <Clock />
      <TodoList />
    </VStack>
  )
}

export default App

import Clock from './components/Clock'
import TodoList from './components/TodoList.jsx'
import { Heading } from '@chakra-ui/react'
import './App.css'

function App() {
  return (
    <>
      <Clock />
      <div className="card">
        <Heading>study desk</Heading>
      </div>
      <div className="card">
        <TodoList />
      </div>
    </>
  )
}

export default App

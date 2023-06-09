import { useState, useEffect } from 'react'
import {
  Heading,
  Stack,
  Input,
  Button,
  IconButton,
  InputRightElement,
  InputGroup,
  ButtonGroup,
  Box,
  Text,
  Divider,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import TodoItem from './TodoItem'
import { v4 as uuidv4 } from 'uuid'

const initialValues = [{ id: '1', text: 'name 1 hi' }]
export default function TodoList() {
  const [values, setValues] = useState(initialValues)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    // console.log('useEffect')
  }, [values])

  function removeMe(removeId) {
    const newList = values.filter(({ id }) => {
      return id !== removeId
    })
    setValues(newList)
  }

  function addTask(inputValue) {
    if (inputValue.trim()) {
      const newEntry = { id: uuidv4(), text: inputValue }
      const newValues = values.concat([newEntry])
      setValues(newValues)

      console.log(newValues)
    }
    setInputValue('')
  }

  const handleChange = (e) => setInputValue(e.target.value)
  const handleClick = () => addTask(inputValue)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask(inputValue)
    }
  }

  return (
    <Stack spacing={'6'}>
      <Heading>What are your goals? </Heading>
      <InputGroup size='sm'>
        <Input
          placeholder='"Add Todo Function"'
          focusBorderColor='green.300'
          size='sm'
          variant='filled'
          _placeholder={{ fontStyle: 'italic' }}
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <InputRightElement width='5.5rem'>
          <ButtonGroup size='sm' isAttached variant='ghost'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
              <Text as='b'>Add</Text>
            </Button>
            <IconButton h='1.75rem' size='sm' aria-label='Todo Options' icon={<AddIcon />} />
          </ButtonGroup>
        </InputRightElement>
      </InputGroup>
      <Divider />
      <Box>
        {values.length > 0 ? (
          <>
            {values.map(({ id, text }) => (
              <TodoItem onRemove={() => removeMe(id)} id={id} key={id} text={text} />
            ))}
          </>
        ) : (
          <Text as='i'>None listed!</Text>
        )}
      </Box>
    </Stack>
  )
}

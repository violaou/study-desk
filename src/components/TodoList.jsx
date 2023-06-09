import React, { useState, useEffect } from 'react'
import {
  Heading,
  Stack,
  Input,
  Text,
  Button,
  IconButton,
  InputRightElement,
  InputGroup,
  ButtonGroup,
  Box,
  StackDivider,
  HStack,
  Checkbox,
} from '@chakra-ui/react'
import { GrFormAdd, GrFormCheckmark } from 'react-icons/gr'
import TodoItem from './TodoItem'
import '../App.css'

const initialValues = [
  { id: '1', text: 'name 1 hi', email: '' },
  { id: '2', text: 'name 1 hi', email: 'email@smail.com' },
  { id: '3', text: 'name2', email: 'email@smail.com' },
  { id: '4', text: 'viola', email: 'email@smail.com' },
]
export default function TodoList() {
  const [values, setValues] = useState(initialValues)
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  useEffect(() => {
    console.log('useEffect')
  }, [values])

  function removeMe(removeId) {
    const newList = values.filter(({ id }) => {
      return id !== removeId
    })
    setValues(newList)
  }

  function addPerson(e) {
    e.preventDefault()
    // Read the form data
    const form = e.target
    const formData = new FormData(form)
    const formJson = Object.fromEntries(formData.entries())
    if (formJson.name && formJson.email) {
      const newEntry = {
        ...formJson,
      }
      const newValues = values.concat([newEntry])
      console.log(newValues)
      setValues(newValues)
    }
  }

  return (
    <Stack spacing={'24px'} onSubmit={addPerson}>
      <Heading>What do you need to do? </Heading>
      <InputGroup size='sm'>
        <Input placeholder='Finish Task function' size='sm' variant='filled' />
        <InputRightElement width='5.5rem'>
          <ButtonGroup size='sm' isAttached variant='ghost'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
              Add
            </Button>
            <IconButton
              h='1.75rem'
              size='sm'
              aria-label='Todo Options'
              icon={<GrFormAdd />}
            />
          </ButtonGroup>
        </InputRightElement>
      </InputGroup>
      <Box shadow='md' borderWidth='1px'>
        {values && (
          <>
            {values.map(({ id, text }) => (
              <TodoItem
                onClick={() => removeMe(id)}
                onRemove={() => removeMe(id)}
                id={id}
                key={id}
                text={text}
              ></TodoItem>
            ))}
            <StackDivider borderColor='gray.200' />
          </>
        )}
      </Box>
    </Stack>
  )
}

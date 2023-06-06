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
} from '@chakra-ui/react'
import { GrFormAdd } from 'react-icons/gr'
import '../App.css'

const initialValues = [
  { id: '1', name: 'name 1 hi', email: '' },
  { id: '2', name: 'name 1 hi', email: 'email@smail.com' },
  { id: '3', name: 'name2', email: 'email@smail.com' },
  { id: '4', name: 'viola', email: 'email@smail.com' },
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
    <>
      <Heading>What do you need to do? </Heading>
      <Stack spacing={3} onSubmit={addPerson}>
        <InputGroup size="sm">
          <Input
            placeholder="Finish Task function"
            size="sm"
            variant="filled"
          />
          <InputRightElement width="5.5rem">
            <ButtonGroup size="sm" isAttached>
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                Add
              </Button>
              <IconButton
                h="1.75rem"
                size="sm"
                aria-label="Todo Options"
                icon={<GrFormAdd />}
              />
            </ButtonGroup>
          </InputRightElement>
        </InputGroup>
      </Stack>
      {/* <form style={divStyle} onSubmit={addPerson}>
        <label>What do you need to do? </label>
        <input type="text" name="name" placeholder="name"></input>
        <input type="submit"></input>
      </form> */}
      {values && (
        <>
          {values.map(({ id, name, email }) => (
            <Text key={id}>
              {name}, email: {email}, id: {id}
              <button onClick={() => removeMe(id)}>x</button>
            </Text>
          ))}
        </>
      )}
    </>
  )
}

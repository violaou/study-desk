import { useState, useEffect } from 'react'
import '../App.css'
import { HStack, Heading, Button, IconButton, Tooltip, Text } from '@chakra-ui/react'
import { CgSandClock } from 'react-icons/cg'

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { timeStyle: 'medium' }))
  const [showSeconds, setShowSec] = useState(true)

  function toggleSeconds() {
    setShowSec(!showSeconds)
  }
  useEffect(() => {
    const timerId = setInterval(() => {
      const newDate = new Date().toLocaleTimeString([], {
        timeStyle: showSeconds ? 'medium' : 'short',
      })
      setTime(newDate)
    }, 1000)
    return () => {
      clearInterval(timerId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSeconds])
  useEffect(() => {
    const timerId = setInterval(() => {
      const newDate = new Date().toLocaleTimeString([], {
        timeStyle: showSeconds ? 'medium' : 'short',
      })
      setTime(newDate)
    }, 1000)
    return () => {
      clearInterval(timerId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSeconds])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <HStack>
      <Tooltip label={`${showSeconds ? 'Hide' : 'how'} seconds`} isOpen>
        <Button variant='unstyled' onClick={toggleSeconds}>
          <Heading fontSize='2xl'>{time}</Heading>
        </Button>
      </Tooltip>
      <Text className='unselectable'> | </Text>
      <Tooltip label='Pomodoro Timer' isOpen>
        <IconButton size='' variant='unstyled' icon={<CgSandClock />} onClick={() => {}}>
          {showSeconds ? 'Hide seconds' : 'Show seconds'}
        </IconButton>
      </Tooltip>
    </HStack>
  )
}

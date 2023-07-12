import { useState, useEffect } from 'react'
import { HStack, Heading, Button, IconButton, Tooltip, Text } from '@chakra-ui/react'
import { CgSandClock } from 'react-icons/cg'

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { timeStyle: 'medium' }))
  const [showSeconds, setShowSec] = useState(true)

  const [stopwatch, setStopwatch] = useState(0)
  const [runTimer, setRunTimer] = useState(false)

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
    // run timer when run is pressed
    let timerId
    if (runTimer) {
      timerId = setInterval(() => {
        setStopwatch(stopwatch - 1)
      }, 60000)
    } else {
      clearInterval(timerId) //TODO: pause
    }
    return () => {
      clearInterval(timerId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runTimer])

  function setTimer() {
    setRunTimer(!runTimer)
  }

  // useEffect(() => {
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <HStack>
      <Tooltip label={`${showSeconds ? 'Hide' : 'Show'} seconds`}>
        <Button variant='unstyled' onClick={toggleSeconds}>
          <Heading fontSize='2xl'>{time}</Heading>
        </Button>
      </Tooltip>
      <Text className='unselectable'> | </Text>
      <Tooltip label='Pomodoro Timer'>
        <IconButton size='' variant='unstyled' icon={<CgSandClock />} onClick={setTimer} />
      </Tooltip>
      <Text>{stopwatch}</Text>
    </HStack>
  )
}

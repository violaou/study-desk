import { useState, useEffect } from 'react'
import { HStack, Heading, Button, IconButton, Tooltip, Text } from '@chakra-ui/react'
import { CgSandClock } from 'react-icons/cg'
import isDev from '../utils'

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { timeStyle: 'medium' }))
  const [showSeconds, setShowSec] = useState(true)

  const [stopwatch, setStopwatch] = useState(20)
  const [runTimer, setRunTimer] = useState(false)

  const toggleSeconds = () => setShowSec(!showSeconds)
  useEffect(() => {
    const timerId = setInterval(() => {
      const newDate = new Date().toLocaleTimeString([], {
        timeStyle: showSeconds ? 'medium' : 'short',
      })
      setTime(newDate)
    }, 1000)
    return () => clearInterval(timerId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSeconds])

  const setTimer = () => {
    setRunTimer(!runTimer)
  }
  useEffect(() => {
    let countdownId
    if (runTimer) {
      if (!stopwatch) return () => clearInterval(countdownId)
      countdownId = setInterval(() => setStopwatch(stopwatch - 1), isDev() ? 100 : 60000)
    } else {
      setStopwatch(20)
    }
    return () => clearInterval(countdownId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runTimer, stopwatch])

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

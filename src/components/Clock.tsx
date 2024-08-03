import {
  Button,
  Heading,
  HStack,
  IconButton,
  Text,
  Tooltip
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import React from 'react'
import { CgSandClock } from 'react-icons/cg'

import isDev from '../utils/utils'

export default function Clock() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { timeStyle: 'medium' })
  )
  const [showSeconds, setShowSec] = useState(true)

  const [stopwatch, setStopwatch] = useState(20)
  const [runTimer, setRunTimer] = useState(false)

  const toggleSeconds = () => setShowSec(!showSeconds)
  useEffect(() => {
    const timerId = setInterval(() => {
      const newDate = new Date().toLocaleTimeString([], {
        timeStyle: showSeconds ? 'medium' : 'short'
      })
      setTime(newDate)
    }, 1000)
    return () => clearInterval(timerId)
  }, [showSeconds])

  const setTimer = () => {
    setRunTimer(!runTimer)
  }
  useEffect(() => {
    // eslint-disable-next-line no-undef
    let countdownId: NodeJS.Timeout | undefined
    if (runTimer) {
      if (!stopwatch) return () => clearInterval(countdownId)
      countdownId = setInterval(
        () => setStopwatch(stopwatch - 1),
        isDev() ? 100 : 60000
      )
    } else {
      setStopwatch(20)
    }
    return () => clearInterval(countdownId)
  }, [runTimer, stopwatch])

  return (
    <HStack>
      <Tooltip label={`${showSeconds ? 'Hide' : 'Show'} seconds`}>
        <Button variant="unstyled" onClick={toggleSeconds}>
          <Heading fontSize="2xl">{time}</Heading>
        </Button>
      </Tooltip>
      <Text className="unselectable"> | </Text>
      {isDev() && <Heading fontSize="2xl">Dev Mode: </Heading>}
      <Tooltip label={`Pomodoro Timer: ${stopwatch}m remaining`}>
        <IconButton
          size=""
          variant="unstyled"
          icon={<CgSandClock />}
          onClick={setTimer}
          aria-label={''}
        />
      </Tooltip>
      <Text>{stopwatch}</Text>
    </HStack>
  )
}

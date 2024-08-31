import { Button, HStack, IconButton, Text, Tooltip } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import React from 'react'
import { CgSandClock } from 'react-icons/cg'
import { MdOutlineRefresh } from 'react-icons/md'
import styled from 'styled-components'

import BellPath from '/@assets/audio/old-style-door-bell.mp3?url'

import isDev from '../utils/helpers'

const StyledTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  gap: 0.5rem;
`

const StyledTimerIcon = styled(IconButton)<{ isTimerRunning?: boolean }>`
  ${(props) => props.isTimerRunning && 'animation: spin 3s linear infinite;'}
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`

export default function Clock() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { timeStyle: 'medium' })
  )
  const [showSeconds, setShowSec] = useState(true)
  const [stopwatch, setStopwatch] = useState(20)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const Bell = new Audio(BellPath)

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
    setIsTimerRunning(!isTimerRunning)
  }
  useEffect(() => {
    // eslint-disable-next-line no-undef
    let countdownId: NodeJS.Timeout | undefined
    if (isTimerRunning) {
      if (stopwatch === 0) Bell.play()
      if (!stopwatch) return () => clearInterval(countdownId)
      countdownId = setInterval(
        () => setStopwatch(stopwatch - 1),
        isDev() ? 100 : 60000 // 1 minute
      )
    } else {
      setStopwatch(20)
    }
    return () => clearInterval(countdownId)
  }, [isTimerRunning, stopwatch])

  return (
    <HStack>
      <Tooltip label={`${showSeconds ? 'Hide' : 'Show'} seconds`}>
        <Button variant="unstyled" onClick={toggleSeconds}>
          <Text>{time}</Text>
        </Button>
      </Tooltip>
      <Text className="unselectable"> | </Text>
      <Tooltip label={`Pomodoro Timer: ${stopwatch}m remaining`}>
        <StyledTimeContainer onClick={setTimer}>
          <StyledTimerIcon
            isTimerRunning={!!stopwatch && isTimerRunning}
            size="small"
            variant="unstyled"
            icon={stopwatch ? <CgSandClock /> : <MdOutlineRefresh />}
            aria-label={'timer'}
          />
          <Text className="unselectable">{stopwatch}</Text>
        </StyledTimeContainer>
      </Tooltip>
    </HStack>
  )
}

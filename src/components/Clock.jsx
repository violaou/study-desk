import { useState, useEffect } from 'react'
import '../App.css'
import { Button, Heading } from '@chakra-ui/react'
import { CgSandClock } from 'react-icons/cg'

export default function Clock() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { timeStyle: 'medium' })
  )
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

  return (
    <>
      <Heading>{time}</Heading>
      <Button
        size="xs"
        variant="outline"
        leftIcon={<CgSandClock />}
        onClick={toggleSeconds}
      >
        {showSeconds ? 'Hide seconds' : 'Show seconds'}
      </Button>
    </>
  )
}

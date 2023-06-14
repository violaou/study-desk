import { useEffect, useState } from 'react'

const ev = ['mousedown', 'touchstart']

export default function useInteraction() {
  const [ready, setReady] = useState(false)

  const listener = () => {
    if (ready === false) {
      setReady(true)
    }
  }

  useEffect(() => {
    ev.forEach((event) => {
      document.addEventListener(event, listener)
    })
    return () => {
      ev.forEach((event) => {
        document.removeEventListener(event, listener)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ready
}

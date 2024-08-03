import { useEffect, useState } from 'react'
const ev = ['mousedown', 'touchstart', 'wheel', 'scroll']

export default function useInteraction() {
  const [ready, setReady] = useState(false)

  const listener = () => {
    if (!ready) setReady(true)
  }
  useEffect(() => {
    ev.forEach((e) => document.addEventListener(e, listener))
    return () => {
      ev.forEach((e) => document.removeEventListener(e, listener))
    }
  }, [])

  return ready
}

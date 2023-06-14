import { Howl } from 'howler'
import { useEffect, useRef } from 'react'
import useInteraction from './useInteraction'

/** created for this issue:
 * https://github.com/joshwcomeau/use-sound/issues/22
 * Also circumvents the issue created with default behaviour according to the new Chrome's Autoplay Policy.
 * https://developer.chrome.com/blog/autoplay/#webaudio
 */
export default function useAudio({ sources, volume, loop, ...rest }) {
  const hasInteracted = useInteraction()
  const audioRef = useRef()

  useEffect(() => {
    if (!hasInteracted) return

    let sound = new Howl({ src: sources, volume, loop, ...rest })
    audioRef.current = sound

    return () => sound.unload()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasInteracted, sources])

  return () => audioRef.current
}

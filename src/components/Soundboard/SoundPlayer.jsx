import PropTypes from 'prop-types'
import { Switch } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useAudioPlayer } from 'react-use-audio-player'
import useInteraction from '../../custom hooks/useInteraction'

export default function SoundPlayer({ file, options }) {
  const interacted = useInteraction()
  const audio = useAudioPlayer()

  useEffect(() => {
    if (interacted) {
      audio.load(file, { ...options })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interacted, file])

  function onClick() {
    audio.togglePlayPause()
  }

  return <Switch onChange={onClick} aria-labelledby={file} />
}

SoundPlayer.propTypes = {
  file: PropTypes.string,
  options: PropTypes.object,
}

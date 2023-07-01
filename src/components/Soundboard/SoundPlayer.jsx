import PropTypes from 'prop-types'
import { Switch, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box } from '@chakra-ui/react'
import { MdGraphicEq } from 'react-icons/md'
import { useEffect } from 'react'
import { useAudioPlayer } from 'react-use-audio-player'
import useInteraction from '../../custom hooks/useInteraction'

export default function SoundPlayer(params) {
  const { file, options } = params
  const interacted = useInteraction()
  const audio = useAudioPlayer()

  useEffect(() => {
    if (interacted) {
      audio.load(file, { ...options })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interacted, file])

  function adjustVolume(val) {
    audio.setVolume(val / 100)
  }
  function playSong() {
    audio.togglePlayPause()
  }
  return (
    <Box display='flex' alignItems='center'>
      <Switch onChange={playSong} aria-labelledby={file} />
      <Slider
        marginLeft='10px'
        aria-label={file}
        defaultValue={50}
        min={0}
        max={100}
        maxW='50%'
        onChange={adjustVolume}
      >
        <SliderTrack>
          <SliderFilledTrack bg='grey' />
        </SliderTrack>
        <SliderThumb boxSize={4}>
          <Box color='tomato' as={MdGraphicEq} />
        </SliderThumb>
      </Slider>
    </Box>
  )
}

SoundPlayer.propTypes = {
  file: PropTypes.string,
  options: PropTypes.object,
}

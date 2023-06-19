import { Text, Box, Heading, IconButton, Icon } from '@chakra-ui/react'
import SoundPlayer from './SoundPlayer'
import { GoMute } from 'react-icons/go'

// https://www.youtube.com/watch?v=0fFUfM0u3Sk
const CAFE = 'src/assets/audio/restaurant-ambience_binaural.mp3'
const LIGHT_RAIN = 'src/assets/audio/mixkit-light-rain-loop-1253.wav'
const HEAVY_RAIN = 'src/assets/audio/mixkit-intense-rain-loop-1246.wav'

export default function SoundBoard() {
  const defaultOptions = {
    volume: 0.5,
    loop: true,
  }
  function muteAll() {}

  return (
    <Box spacing={6} justifyContent='space-between' minWidth='20vw'>
      <Box display='flex' justifyContent='space-between' alignItems='baseline'>
        <Heading size='md'>Sounds</Heading>
        <IconButton size='xs' aria-label='mute-all' variant='link' onClick={muteAll} icon={<Icon as={GoMute} />}>
          mute all
        </IconButton>
      </Box>
      <Text>Cafe</Text>
      <SoundPlayer id='cafe' file={CAFE} options={defaultOptions} />
      <Text>Light Rain</Text>
      <SoundPlayer id='lightRain' file={LIGHT_RAIN} options={defaultOptions} />
      <Text>Heavy Rain</Text>
      <SoundPlayer id='heavyRain' file={HEAVY_RAIN} options={defaultOptions} />
    </Box>
  )
}

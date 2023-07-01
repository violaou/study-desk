import { Text, Box, Heading, IconButton, Icon } from '@chakra-ui/react'
import SoundPlayer from './SoundPlayer'
import { GoMute } from 'react-icons/go'

// https://www.youtube.com/watch?v=0fFUfM0u3Sk
const CAFE = { id: 'cafe', location: 'src/assets/audio/restaurant-ambience_binaural.mp3', name: 'Cafe' }
const LIGHT_RAIN = { id: 'lightRain', location: 'src/assets/audio/mixkit-light-rain-loop-1253.wav', name: 'Light Rain' }
const HEAVY_RAIN = {
  id: 'heavyRain',
  location: 'src/assets/audio/mixkit-intense-rain-loop-1246.wav',
  name: 'Heavy Rain',
}

export default function SoundBoard() {
  const defaultOptions = {
    volume: 0.5,
    loop: true,
  }
  const defaultSounds = [CAFE, LIGHT_RAIN, HEAVY_RAIN]
  function muteAll() {}

  return (
    <Box spacing={6} justifyContent='space-between' minWidth='20vw'>
      <Box display='flex' justifyContent='space-between' alignItems='baseline'>
        <Heading size='md'>Sounds</Heading>
        <IconButton size='xs' aria-label='mute-all' variant='link' onClick={muteAll} icon={<Icon as={GoMute} />}>
          mute all
        </IconButton>
      </Box>
      {defaultSounds.map(({ id, location, name }) => {
        return (
          <>
            <Text>{name}</Text>
            <SoundPlayer id={id} file={location} options={defaultOptions} />
          </>
        )
      })}
    </Box>
  )
}

import { Text, Box, Heading } from '@chakra-ui/react'
import SoundPlayer from './SoundPlayer'
// import { GoMute } from 'react-icons/go'

// https://www.youtube.com/watch?v=0fFUfM0u3Sk
const CAFE = { id: 'cafe', location: 'src/assets/audio/restaurant-ambience_binaural.mp3', name: 'Cafe' }
const LIGHT_RAIN = { id: 'lightRain', location: 'src/assets/audio/mixkit-light-rain-loop-1253.wav', name: 'Light Rain' }
const HEAVY_RAIN = {
  id: 'heavyRain',
  location: 'src/assets/audio/mixkit-intense-rain-loop-1246.wav',
  name: 'Heavy Rain',
}
const defaultSounds = [CAFE, LIGHT_RAIN, HEAVY_RAIN]
const defaultOptions = {
  volume: 0.5,
  loop: true,
}

export default function SoundBoard() {
  return (
    <Box spacing={6} justifyContent='space-between' minWidth='20vw'>
      <Box display='flex' justifyContent='space-between' alignItems='baseline' paddingBottom='var(--chakra-space-4)'>
        <Heading size='md'>Ambient Sounds</Heading>
      </Box>
      {defaultSounds.map(({ id, location, name }) => {
        return (
          <div key={id}>
            <Text fontSize='sm'>{name}</Text>
            <SoundPlayer id={id} file={location} options={defaultOptions} />
          </div>
        )
      })}
      {/* <SoundPlayer id='3r_Z5AYJJd4' file='3r_Z5AYJJd4' options={defaultOptions} stream /> */}
    </Box>
  )
}

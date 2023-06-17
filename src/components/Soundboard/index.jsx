import { Text, Box, Heading } from '@chakra-ui/react'
import SoundPlayer from './SoundPlayer'

// https://www.youtube.com/watch?v=0fFUfM0u3Sk

export default function SoundBoard() {
  // const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box spacing={4} justifyContent='space-between'>
      <Heading size='sm'>Sounds</Heading>
      <Text>Cafe</Text>
      <SoundPlayer id='cafe' file={'src/assets/audio/restaurant-ambience_binaural.mp3'} />
      <Text>Light Rain</Text>
      <SoundPlayer id='lightRain' file={'src/assets/audio/mixkit-light-rain-loop-1253.wav'} />
      <Text>Heavy Rain</Text>
      <SoundPlayer id='heavyRain' file={'src/assets/audio/mixkit-intense-rain-loop-1246.wav'} />
    </Box>
  )
}

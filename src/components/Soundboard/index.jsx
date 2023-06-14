import { Text, Box, useColorMode, Heading } from '@chakra-ui/react'
import SoundPlayer from './SoundPlayer'

// https://www.youtube.com/watch?v=0fFUfM0u3Sk

export default function SoundBoard() {
  // const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box spacing={4} justifyContent='space-between'>
      <Heading size='sm'>Sounds</Heading>
      <Text>cafe</Text>
      <SoundPlayer id='email-alerts' file={'src/assets/audio/restaurant-ambience_binaural.mp3'} />
    </Box>
  )
}

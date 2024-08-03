import { Text, Box, Heading } from '@chakra-ui/react'
import SoundPlayer from './SoundPlayer'
import styled from 'styled-components'
import ambientCafe from '/@assets/audio/restaurant-ambience_binaural.mp3'
import rain from '/@assets/audio/mixkit-light-rain-loop-1253.wav'
import heavyRain from '/@assets/audio/mixkit-intense-rain-loop-1246.wav'
import { Sound } from '/src/utils/types'

const CAFE = {
  id: 'cafe',
  path: ambientCafe,
  label: 'Cafe'
}
const LIGHT_RAIN = {
  id: 'lightRain',
  path: rain,
  label: 'Light Rain'
}
const HEAVY_RAIN = {
  id: 'heavyRain',
  path: heavyRain,
  label: 'Heavy Rain'
}
const defaultSounds: Sound[] = [CAFE, LIGHT_RAIN, HEAVY_RAIN].map((sound) => {
  return { selected: false, ...sound }
})

const defaultOptions = {
  volume: 0.5,
  loop: true
}

const StyledPlayerRow = styled.div<{ selected: boolean }>`
  background: ${(props) => (props.selected ? 'white' : undefined)};
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: dotted;
  &:last-child {
    border-bottom: none;
  }
`

const StyledTitle = styled(Text)`
  padding-bottom: 0.5rem;
`

export default function SoundBoard() {
  return (
    // @ts-ignore
    <Box spacing={6} justifyContent="space-between" minWidth="20vw">
      <Box display="flex" justifyContent="space-between" alignItems="baseline">
        <Heading size="md">Ambient Sounds</Heading>
      </Box>
      {defaultSounds.map(({ id, path, label, selected }) => {
        return (
          <StyledPlayerRow key={id} selected={selected || false}>
            <StyledTitle className="unselectable" fontSize="sm">
              {label}
            </StyledTitle>
            <SoundPlayer file={path} options={defaultOptions} />
          </StyledPlayerRow>
        )
      })}
    </Box>
  )
}

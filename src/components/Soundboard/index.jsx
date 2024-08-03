import { Text, Box, Heading } from '@chakra-ui/react';
import SoundPlayer from './SoundPlayer';
import styled from 'styled-components';
import ambientCafe from '/@assets/audio/restaurant-ambience_binaural.mp3';
import rain from '/@assets/audio/mixkit-light-rain-loop-1253.wav';
import heavyRain from '/@assets/audio/mixkit-intense-rain-loop-1246.wav';
// import { GoMute } from 'react-icons/go'

const CAFE = {
    id: 'cafe',
    location: ambientCafe,
    name: 'Cafe',
};
const LIGHT_RAIN = {
    id: 'lightRain',
    location: rain,
    name: 'Light Rain',
};
const HEAVY_RAIN = {
    id: 'heavyRain',
    location: heavyRain,
    name: 'Heavy Rain',
};
const defaultSounds = [CAFE, LIGHT_RAIN, HEAVY_RAIN];
const defaultOptions = {
    volume: 0.5,
    loop: true,
};

const StyledPlayer = styled.div`
    margin-top: 1rem;
`;

export default function SoundBoard() {
    return (
        // @ts-ignore
        <Box spacing={6} justifyContent="space-between" minWidth="20vw">
            <Box display="flex" justifyContent="space-between" alignItems="baseline">
                <Heading size="md">Ambient Sounds</Heading>
            </Box>
            {defaultSounds.map(({ id, location, name }) => {
                return (
                    <StyledPlayer key={id}>
                        <Text className="unselectable" fontSize="sm">
                            {name}
                        </Text>
                        <SoundPlayer
                            // @ts-ignore
                            id={id}
                            file={location}
                            options={defaultOptions}
                        />
                    </StyledPlayer>
                );
            })}
        </Box>
    );
}

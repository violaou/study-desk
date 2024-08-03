import PropTypes from 'prop-types';
import { Switch, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box } from '@chakra-ui/react';
import { MdGraphicEq } from 'react-icons/md';
import { useEffect } from 'react';
import { useAudioPlayer } from 'react-use-audio-player';
import useInteraction from '../../custom hooks/useInteraction';

export default function SoundPlayer(params: { file: string; options: any }) {
    const { file, options } = params;
    const interacted = useInteraction();
    const audio = useAudioPlayer();

    useEffect(() => {
        if (interacted) {
            audio.load(file, { ...options });
        }
    }, [interacted, file]);

    function adjustVolume(val: number) {
        audio.setVolume(val / 100);
    }
    function playSong() {
        audio.togglePlayPause();
    }
    return (
        <Box display="flex" alignItems="center">
            <Switch onChange={playSong} aria-labelledby={file} />
            <Slider
                marginLeft="10px"
                aria-label={file}
                defaultValue={50}
                min={0}
                max={100}
                maxW="50%"
                onChange={adjustVolume}
            >
                <SliderTrack>
                    <SliderFilledTrack bg="grey" />
                </SliderTrack>
                <SliderThumb boxSize={4}>
                    <Box color="tomato" as={MdGraphicEq} />
                </SliderThumb>
            </Slider>
        </Box>
    );
}

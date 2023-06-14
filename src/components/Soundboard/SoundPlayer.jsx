import PropTypes from 'prop-types'
import { Switch, useColorMode } from '@chakra-ui/react'
import React, { useState } from 'react'
import useAudio from '../../custom hooks/useAudio'
import { Howl } from 'howler'

export default function SoundPlayer({ file }) {
  const sound = new Howl({
    src: [file],
    volume: 0.3,
    loop: true,
  })
  function onClick() {
    sound.play()
  }

  return <Switch onClick={onClick} aria-labelledby={file} />
}

SoundPlayer.propTypes = {
  file: PropTypes.string,
}

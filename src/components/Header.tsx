import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Heading, HStack, IconButton, useColorMode } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

const StyledHStack = styled(HStack)`
  padding-top: 34px;
`
export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <StyledHStack spacing={4} justifyContent="space-between">
      <Heading className="unselectable">study desk</Heading>
      <IconButton
        size="lg"
        aria-label="Remove task"
        variant="ghost"
        color="#ccd0d5"
        _hover={{ bg: 'none', color: 'orange' }}
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
    </StyledHStack>
  )
}

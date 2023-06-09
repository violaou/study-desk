import { Heading, HStack, IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'

export default function Header() {
  const { toggleColorMode } = useColorMode()
  return (
    <HStack spacing={4} justifyContent='space-between'>
      <Heading>study desk</Heading>
      <IconButton
        size='lg'
        aria-label='Remove task'
        variant='ghost'
        color='#ccd0d5'
        _hover={{ bg: 'none', color: 'orange' }}
        icon={<MoonIcon />}
        onClick={toggleColorMode}
      />
    </HStack>
  )
}

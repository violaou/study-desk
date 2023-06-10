import PropTypes from 'prop-types'
import { HStack, Checkbox, IconButton, Divider, useColorMode, Box, keyframes } from '@chakra-ui/react'
import { RiDeleteBin4Line } from 'react-icons/ri'
import { motion } from 'framer-motion'

export default function TodoItem({ text, onRemove }) {
  const { colorMode } = useColorMode()
  const animationKeyframes = keyframes`
  0% { transform: translateY(-20px); opacity: 0; }
  100% { transform: translateY(0px); opacity: 1;}
  `
  return (
    <Box as={motion.div} animation={`${animationKeyframes} 0.5s ease-in-out 1`}>
      <HStack
        justifyContent='space-between'
        // backgroundColor={'whiteAlpha.900'}
        _before={{ filter: colorMode === 'light' ? 'opacity(0.2)' : 'opacity(0.2)', backgroundColor: 'whiteAlpha.900' }}
      >
        <Checkbox size='md' variant='ghost' aria-label='Check task'>
          {text}
        </Checkbox>
        <IconButton
          onClick={onRemove}
          size='sm'
          aria-label='Remove task'
          variant='ghost'
          _hover={{ bg: 'none', color: 'red' }}
          icon={<RiDeleteBin4Line />}
        />
      </HStack>
      <Divider borderColor='gray.200' />
    </Box>
  )
}
TodoItem.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string,
  text: PropTypes.string,
  onRemove: PropTypes.func,
  props: PropTypes.any,
}

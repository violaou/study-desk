import {
  Box,
  Checkbox,
  HStack,
  IconButton,
  keyframes,
  useColorMode,
  usePrefersReducedMotion
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import React from 'react'
import { RiDeleteBin4Line } from 'react-icons/ri'

const animationKeyframes = keyframes`
  0% { transform: translateY(-20px); opacity: 0; }
  100% { transform: translateY(0px); opacity: 1;}
  `

type ToDoItemProps = {
  text: string
  onRemove: () => void
}

export default function TodoItem(params: ToDoItemProps) {
  const { text, onRemove } = params
  const { colorMode } = useColorMode()
  const animation = usePrefersReducedMotion()
    ? undefined
    : `${animationKeyframes} 0.5s ease-in-out 1`

  // box does not support framer motion props for now (ie: exit) motionProps={{ exit: { opacity: 0, transition: { duration: 0.1 } } }}>
  return (
    <Box as={motion.div} animation={animation}>
      <HStack
        justifyContent="space-between"
        // backgroundColor={'whiteAlpha.900'}
        _before={{
          filter: colorMode === 'light' ? 'opacity(0.2)' : 'opacity(0.2)',
          backgroundColor: 'whiteAlpha.900'
        }}
      >
        <Checkbox size="md" variant="ghost" aria-label="Check task">
          {text}
        </Checkbox>
        <IconButton
          onClick={onRemove}
          size="sm"
          aria-label="Remove task"
          variant="ghost"
          _hover={{ bg: 'none', color: 'red' }}
          icon={<RiDeleteBin4Line />}
        />
      </HStack>
    </Box>
  )
}
TodoItem.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string,
  text: PropTypes.string,
  onRemove: PropTypes.func,
  props: PropTypes.any
}

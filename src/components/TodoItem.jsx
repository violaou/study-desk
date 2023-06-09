import PropTypes from 'prop-types'
import { HStack, Checkbox, Text, IconButton } from '@chakra-ui/react'
import { RiDeleteBin4Line } from 'react-icons/ri'

export default function TodoItem({ onClick, id, text, ...props }) {
  return (
    <HStack justifyContent='space-between'>
      <Checkbox onClick={onClick} size='md' variant='ghost'></Checkbox>
      <Text width='100%' textAlign='left'>
        {text}, id: {id}
      </Text>
      <IconButton
        h='1.75rem'
        size='sm'
        aria-label='Todo Options'
        variant='ghost'
        color='#ccd0d5'
        _hover={{ bg: 'none', color: 'red' }}
        icon={<RiDeleteBin4Line />}
      />
    </HStack>
  )
}
TodoItem.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string,
  text: PropTypes.string,
  props: PropTypes.any,
}

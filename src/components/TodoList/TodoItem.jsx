import PropTypes from 'prop-types'
import { HStack, Checkbox, Text, IconButton, Divider } from '@chakra-ui/react'
import { RiDeleteBin4Line } from 'react-icons/ri'

export default function TodoItem({ onClick, text, onRemove }) {
  return (
    <>
      <HStack justifyContent='space-between'>
        <Checkbox onClick={onClick} size='md' variant='ghost' aria-label='Check task' />
        <Text width='100%' textAlign='left'>
          {text}
        </Text>
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
    </>
  )
}
TodoItem.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string,
  text: PropTypes.string,
  onRemove: PropTypes.func,
  props: PropTypes.any,
}

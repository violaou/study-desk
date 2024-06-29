import { useState } from 'react';
import {
    Heading,
    Stack,
    Input,
    Button,
    IconButton,
    InputRightElement,
    InputGroup,
    ButtonGroup,
    Box,
    Text,
    Divider,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid';

// todo: this needs to NOT be hardcorded
const initialValues = [
    { id: '1', text: 'spotify' },
    { id: '13', text: 'button for cafe noise' },
    { id: '134', text: 'rain sounds' },
    { id: '1324234', text: 'set your own background' },
    { id: 'we2345', text: 'focus counter' },
    { id: '1334534524234', text: 'make fullscreen button/exit fullscreen' },
];
export default function TodoList() {
    const [values, setValues] = useState(initialValues);
    const [inputValue, setInputValue] = useState('');

    function removeMe(removeId) {
        const newList = values.filter(({ id }) => {
            return id !== removeId;
        });
        setValues(newList);
    }

    function addTask(inputValue) {
        if (inputValue.trim()) {
            const newEntry = { id: uuidv4(), text: inputValue };
            const newValues = values.concat([newEntry]);
            setValues(newValues);
        }
        setInputValue('');
    }

    const handleChange = (e) => setInputValue(e.target.value);
    const handleClick = () => addTask(inputValue);
    const clearAll = () => setValues([]);
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTask(inputValue);
        }
    };

    const scrollbarCss = {
        '&::-webkit-scrollbar': {
            width: '2px',
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#a6a9ab7c',
            borderRadius: '24px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#a8bbbf',
            borderRadius: '24px',
        },
    };

    return (
        <Stack spacing={'6'} minW="sm" maxW="md">
            <Box display="flex" justifyContent="space-between" alignItems="baseline">
                <Heading>Goals</Heading>
                <Button size="xs" variant="link" onClick={clearAll}>
                    clear all
                </Button>
            </Box>
            <InputGroup size="sm">
                <Input
                    placeholder='"Add Todo Function"'
                    focusBorderColor="green.300"
                    size="sm"
                    variant="filled"
                    _placeholder={{ fontStyle: 'italic' }}
                    value={inputValue}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                />
                <InputRightElement width="5.5rem">
                    <ButtonGroup size="sm" isAttached variant="ghost">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            <Text className="unselectable" as="b">
                                add
                            </Text>
                        </Button>
                        {/* todo: was this for subtasks? */}
                        {/* <IconButton
                            h="1.75rem"
                            size="sm"
                            aria-label="Todo Options"
                            icon={<AddIcon />}
                        /> */}
                    </ButtonGroup>
                </InputRightElement>
            </InputGroup>
            <Divider />
            {/* List items */}
            <Box maxH="50vh" overflowY="auto" css={scrollbarCss}>
                {values.length > 0 ? (
                    <>
                        {values.map(({ id, text }) => (
                            <TodoItem onRemove={() => removeMe(id)} id={id} key={id} text={text} />
                        ))}
                    </>
                ) : (
                    <Text
                        className="unselectable"
                        fontSize="sm"
                        as="i"
                        alignSelf="center"
                        opacity="0.2"
                    >
                        none listed - add something to do!
                    </Text>
                )}
            </Box>
        </Stack>
    );
}

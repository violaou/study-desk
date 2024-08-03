import { SetStateAction, useState } from 'react';
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

export default function TodoList() {
    const [values, setValues] = useState<any[]>([]);
    const [inputValue, setInputValue] = useState('');

    function removeItem(taskId: string) {
        const newList = values.filter(({ id }) => id !== taskId);
        setValues(newList);
    }

    function addTask(inputValue: string) {
        if (inputValue.trim()) {
            const newEntry = { id: uuidv4(), text: inputValue };
            const newValues = values.concat([newEntry]);
            setValues(newValues);
        }
        setInputValue('');
    }

    const handleChange = (e: { target: { value: SetStateAction<string> } }) =>
        setInputValue(e?.target?.value);
    const handleClick = () => addTask(inputValue);
    const clearAll = () => setValues([]);
    const handleKeyPress = (e: { key: string }) => {
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
                <Heading size="md">Goals</Heading>
                <Button size="xs" variant="link" onClick={clearAll}>
                    clear all
                </Button>
            </Box>
            <InputGroup size="sm">
                <Input
                    placeholder="What do you want to do?"
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
                            <TodoItem
                                onRemove={() => removeItem(id)}
                                id={id}
                                key={id}
                                text={text}
                            />
                        ))}
                    </>
                ) : (
                    <Text
                        className="unselectable"
                        fontSize="sm"
                        as="i"
                        alignSelf="center"
                        opacity="0.9"
                    >
                        No tasks - add something to do!
                    </Text>
                )}
            </Box>
        </Stack>
    );
}

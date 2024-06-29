import { Heading, HStack, IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <HStack spacing={4} justifyContent="space-between">
            <Heading>study desk</Heading>
            <IconButton
                size="lg"
                aria-label="Remove task"
                variant="ghost"
                color="#ccd0d5"
                _hover={{ bg: 'none', color: 'orange' }}
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
            />
        </HStack>
    );
}

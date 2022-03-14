import NextLink from 'next/link'
import { Flex, Button, IconButton, Heading, Box, HStack, Container, Center, Menu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react'
import { useState } from 'react'
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { signIn, signOut, useSession } from 'next-auth/react'
import { DarkModeSwitch } from './DarkModeSwitch'

export const Nav = ({ title }) => {
    const [display, changeDisplay] = useState('none')
    const { data: session, status } = useSession()
    return (
        <Flex>
            <Flex
                pos='fixed'
                top='1rem'
                right='7rem'
            >
                <Flex
                    display={['none', 'none', 'flex', 'flex']}>
                    <Box>
                        <NextLink href='/' passHref>
                            <Button
                                as='a'
                                variant='ghost'
                                aria-label='Home'
                                my={5}
                                w='100%'>
                                Home
                            </Button>
                        </NextLink>
                    </Box>
                
                    <Box>
                        <NextLink href='/community' passHref>
                            <Button
                                as='a'
                                variant='ghost'
                                aria-label='Community'
                                my={5}
                                w='100%'>
                                Community
                            </Button>
                        </NextLink>
                    </Box>
                </Flex>
             
                <Box>
                    <NextLink href='/' passHref>
                        <Heading
                            fontSize="5vw"
                            // bg='gray.500'
                            bgGradient="linear(to-l, #187795, #A3B4A2, #38686A)"
                            bgClip="text">
                            {title}
                        </Heading>
                    </NextLink>
                </Box>

                <IconButton
                    aria-label='Open Menu'
                    size='lg'
                    mr={2}
                    icon={<HamburgerIcon />}
                    display={['flex', 'flex', 'none', 'none']}
                    onClick={() => changeDisplay('flex')}
                />
                {/* <DarkModeSwitch /> */}
              
                <Box>
                    <Flex
                        display={['none', 'none', 'flex', 'flex']}>

                        {!session && (
                            <>
                                <NextLink href='/community' passHref>
                                    <Button
                                        as='a'
                                        variant='ghost'
                                        aria-label='Community'
                                        my={5}
                                        w='100%'
                                        onClick={signIn}>
                                        Sign In
                                    </Button>
                                </NextLink>
                            </>
                        )}
                        {session && (
                            <>
                                <Menu>
                                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} my={5}>
                                        Welcome, {session.user.name}!
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>
                                            <NextLink href='/profile' passHref>
                                                <Button
                                                    as='a'
                                                    variant='ghost'
                                                    aria-label='Profile'
                                                    my={5}
                                                    w='100%'>
                                                    Profile
                                                </Button>
                                            </NextLink>
                                        </MenuItem>
                                        <MenuItem>
                                            <NextLink href='/community' passHref>
                                                <Button
                                                    as='a'
                                                    variant='ghost'
                                                    aria-label='Community'
                                                    my={5}
                                                    w='100%'
                                                    onClick={signOut}>
                                                    Sign Out
                                                </Button>
                                            </NextLink>
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </>
                        )}
                    </Flex>
                </Box>
            </Flex>

            <Flex
                w='100vw'
                bgColor='gray.50'
                zIndex={20}
                h='100vh'
                pos='fixed'
                top='0'
                left='0'
                overflowY='auto'
                flexDir='column'
                display={display}>
                <Flex justify='flex-end'>
                    <IconButton
                        mt={2}
                        mr={2}
                        aria-label='Close Menu'
                        size='lg'
                        icon={<CloseIcon />}
                        onClick={() => changeDisplay('none')} />
                </Flex>
                <Flex
                    flexDir='column'
                    align='center'>
                    <NextLink href='/' passHref>
                        <Button
                            as='a'
                            variant='ghost'
                            aria-label='Home'
                            my={5}
                            w='100%'>
                            Home
                        </Button>
                    </NextLink>
                    <NextLink href='/profile' passHref>
                        <Button
                            as='a'
                            variant='ghost'
                            aria-label='Profile'
                            my={5}
                            w='100%'>
                            Profile
                        </Button>
                    </NextLink>
                    <NextLink href='/community' passHref>
                        <Button
                            as='a'
                            variant='ghost'
                            aria-label='Community'
                            my={5}
                            w='100%'>
                            Community
                        </Button>
                    </NextLink>
                </Flex>
            </Flex>
        </Flex >
    )
}

Nav.defaultProps = {
    title: 'CommunityCloset',
}
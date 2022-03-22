import React from 'react'
import { Box, Flex, Text, IconButton, Button, Stack, Collapse, Icon, Link } from '@chakra-ui/react'
import "@fontsource/bodoni-moda"

const Header = () => {
    return (
        <>
            <Box >
                <Flex minH={'60px'} position='fixed' bg='#FFFAEF' w='1200px'>
                    <Stack direction={'row'} spacing={10} m={5}>
                        <Link
                            p={2}
                            fontWeight={500}
                            _hover={{
                                textDecoration: 'none',
                                color: '#6e8069',
                            }}
                            fontFamily='Bodoni Moda'
                            fontSize='2xl'
                            href='#home'>
                            home
                        </Link>
                        <Link
                            p={2}
                            fontWeight={500}
                            _hover={{
                                textDecoration: 'none',
                                color: '#6e8069',
                            }}
                            fontFamily='Bodoni Moda'
                            fontSize='2xl'
                            href='#about'>
                            about
                        </Link>
                        <Link
                            p={2}
                            fontWeight={500}
                            _hover={{
                                textDecoration: 'none',
                                color: '#6e8069',
                            }}
                            fontFamily='Bodoni Moda'
                            fontSize='2xl'
                            href='#projects'>
                            projects
                        </Link>
                        <Link
                            p={2}
                            fontWeight={500}
                            _hover={{
                                textDecoration: 'none',
                                color: '#6e8069',
                            }}
                            fontFamily='Bodoni Moda'
                            fontSize='2xl'
                            href='#resume'>
                            resume
                        </Link>
                    </Stack>
                </Flex>
            </Box>
        </>
    )
}

export default Header
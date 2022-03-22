import React from 'react'
import { Box, Image } from '@chakra-ui/react'

const Resume = () => {
    return (
        <div id='resume'>
            <Box h='575px' >
                <Box fontFamily={'Bodoni Moda'} fontSize={'6xl'} fontWeight={'bold'} align={'center'}>
                    <br /> resume
                </Box>
                <Box fontFamily={'Raleway'} fontSize={'3xl'} mt={5}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                    sed do eiusmod tempor incididunt ut labore et dolore magna <br />
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis <br />
                    aute irure dolor in reprehenderit in voluptate velit esse <br />
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br />
                    cupidatat non proident, sunt in culpa qui officia deserunt <br />
                    mollit anim id est laborum.<br />
                </Box>
            </Box>
            <Image alt='illustration' src='Olá - Planting.png' position='relative' h='300px' ml={700} />


        </div>

    )
}

export default Resume

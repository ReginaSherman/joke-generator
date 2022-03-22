import React from 'react'
import { Box, Image } from '@chakra-ui/react'


const Hero = () => {
    return (
        <div id='home'>
            <Box h='800px' mt={24}>
                <Box fontFamily={'Bodoni Moda'} fontSize={'6xl'} fontWeight={'bold'} align={'center'}>
                    <br /> regina sherman
                </Box>
                <Box fontFamily={'Bodoni Moda'} fontSize={'3xl'}>
                    &quot;a full-stack software engineer with a focus on front-end <br />
                    development and creating beautiful, intuitive user experiences&quot;
                </Box>
                <Image alt='illustration' src='Olá - Relaxing (1).png' mt={100} w='700px'/>
            </Box>

        </div>

    )
}

export default Hero
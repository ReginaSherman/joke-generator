
import React from 'react'
import { Box, Flex, Stack, Img } from '@chakra-ui/react'
import Tech from './Tech'

const About = () => {
    return (
        <div id='about'>
            <Box h='800px'>
            <Box fontFamily={'Bodoni Moda'} fontSize={'6xl'} fontWeight={'bold'} align={'center'}>
                <br /> about
            </Box>
            <Box fontFamily='Raleway' fontSize='2xl' mt={5}>
                I want to make technology more accessible and straight-forward <br />
                for the average person. Because of my interest in and understanding <br />
                of design, I can bridge the gap between developers and UI designers <br />
                to form a cohesive front-end team.
            </Box>
            <Tech />
        </Box>
        </div>
        
    )
}

export default About
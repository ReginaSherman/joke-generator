import React from 'react'
import { Box, SimpleGrid, Image, Flex } from '@chakra-ui/react'

const Tech = () => {
    return (
        <>
            <Box fontFamily={'Bodoni Moda'} fontSize={'6xl'} fontWeight={'bold'} align={'center'} mt={10}>
                tech
                <Flex>
                <SimpleGrid columns={5} spacing='40px' mt={5}>
                    <Image alt='JavaScript' src='JavaScript.png' h='20'/>
                    <Image alt='Next' src='Next.png' h='20'/>
                    <Image alt='React' src='React.png' h='20'/>
                    <Image alt='Python' src='Python.png' h='20'/>
                    <Image alt='PostgreSQL' src='Postgresql.png' h='20'/>
                    <Image alt='Nodejs' src='Nodejs.png' h='20'/>
                    <Image alt='CSS' src='CSS.png' h='20' />
                    <Image alt='HTML' src='HTML.png' h='20'/>
                    <Image alt='MongoDB' src='MongoDB.png' h='20'/>
                    <Image alt='AWS' src='AWSS3.png' h='20' />




                </SimpleGrid>
                </Flex>
                

            </Box></>

    )
}

export default Tech
import React from 'react'
import { Box, Image, Flex, SimpleGrid } from '@chakra-ui/react'
import { projects } from '../public/constants/projects'

import ProjectCard from './ProjectCard'


const Projects = () => {
    return (
        <div id='projects'>
            <Box h='1000px'>
                <Box fontFamily={'Bodoni Moda'} fontSize={'6xl'} fontWeight={'bold'} align={'center'}>
                    <br /> projects
                </Box>
                <Flex>
                    <SimpleGrid columns={2} spacing={10} width={1000}>
                        {projects.map(project => {
                            return (
                                <>
                                    <ProjectCard project={project} />
                                </>
                            )
                        })}

                    </SimpleGrid>
                </Flex>
            </Box>
        </div>

    )
}

export default Projects
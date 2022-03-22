import React from 'react'
import { Box, Image } from '@chakra-ui/react'
const ProjectCard = ({project}) => {
  return (
    <div>
        <Box>
          <Image alt={project.title} src={project.image}/>

        </Box>
    </div>
  )
}

export default ProjectCard
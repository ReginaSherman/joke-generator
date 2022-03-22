import { Box, Flex } from '@chakra-ui/react'
import 'focus-visible/dist/focus-visible' 

import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'

export default function Home() {
  return (
    <Box bg='#FFFAEF'>
      <Header /> <br />
      <Flex justify='center'>
        <Hero />
      </Flex>
      <Flex justify='center'>
        <About />
      </Flex>
      <br />
      <Flex justify='center'>
        <Projects />
      </Flex>
      <Flex justify='center'>
        <Experience />
      </Flex>
      


    </Box>
  )
}

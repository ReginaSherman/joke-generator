import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Nav } from '../components/Nav'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'
import { Box } from '@chakra-ui/react'
import ClothingItems from '../components/ClothingItems'

const Index = () => (
  <Container height="100vh" width='100%' padding='150'>
    <ClothingItems />
    <Footer>
    </Footer>
    <CTA />
  </Container>
)

export default Index
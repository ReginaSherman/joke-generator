import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@chakra-ui/theme'
import zenScroll from 'zenscroll'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
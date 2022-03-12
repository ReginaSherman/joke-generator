import { ChakraProvider } from '@chakra-ui/react'
import {SessionProvider} from 'next-auth/react';
import {QueryClient, QueryClientProvider} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()
 

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <QueryClientProvider client={queryClient}>
    <SessionProvider session={session}>
    <ChakraProvider>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </ChakraProvider>
    </SessionProvider>
    </QueryClientProvider>
  )
}

export default MyApp
import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

// const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})


const theme = extendTheme({
  colors: {
    black: '#16161D',
    bg: '#FFFAEF'
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'gray.100'
      },
      
    },
  },
  // fonts,
  breakpoints
})

export default theme
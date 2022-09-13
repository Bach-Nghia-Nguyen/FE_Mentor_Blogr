import { extendTheme } from '@chakra-ui/react'

const customTheme = {
  colors: {
    primary: {
      lightRed: 'hsl(356, 100%, 66%)',
      veryLightRed: 'hsl(355, 100%, 74%)',
      veryDarkBlue: 'hsl(208, 49%, 24%)',
    },
    neutral: {
      white: 'hsl(0, 0%, 100%)',
      grayishBlue: 'hsl(240, 2%, 79%)',
      veryDarkGrayishBlue: 'hsl(207, 13%, 34%)',
      veryDarkBlackBlue: 'hsl(240, 10%, 16%)',
      black: '#000000',
    },
    gradient: {
      veryLightRed: 'hsl(13, 100%, 72%)',
      lightRed: 'hsl(353, 100%, 62%)',
      veryDarkGrayBlue: 'hsl(237, 17%, 21%)',
      veryDarkDesaturatedBlue: 'hsl(237, 23%, 32%)',
    },
  },
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Overpass, sans-serif',
        fontSize: '16px',
      },
    },
  },
  component: {
    MenuItem: {
      baseStyle: {
        color: 'red',
      },
    },
  },
  breakpoints: {
    sm: '320px',
    sm2: '500px',
    md: '768px',
    lg: '960px',
    lg2: '1080px',
    xl: '1200px',
    '2xl': '1536px',
  },
}

export const theme = extendTheme(customTheme)

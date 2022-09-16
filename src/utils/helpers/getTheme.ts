import { createTheme, PaletteMode } from '@mui/material'

const lightTheme = createTheme(getThemeTokens('light'))
const darkTheme = createTheme(getThemeTokens('dark'))

export default function getTheme(mode: PaletteMode) {
  return mode === 'dark' ? darkTheme : lightTheme
}

function getThemeTokens(mode: PaletteMode) {
  return {
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: 'rgba(93, 95, 239, 1)',
            },
            secondary: {
              main: 'rgba(0, 0, 0, 1)',
            },
          }
        : {
            primary: {
              main: 'rgba(93, 95, 239, 1)',
            },
            secondary: {
              main: 'rgba(0, 0, 0, 1)',
            },
          }),
    },
    typography: {
      fontFamily: 'Nunito',
    },
  }
}

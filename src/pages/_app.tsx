import { CssBaseline, NoSsr, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { useEffect, useMemo, useState } from 'react'
import usePalette from '../state/usePalette'
import getTheme from '../utils/helpers/getTheme'

function MyApp({ Component, pageProps }: AppProps) {
  const paletteMode = usePalette((state) => state.paletteMode)
  const theme = useMemo(() => getTheme(paletteMode), [paletteMode])
  const [mount, setMount] = useState(false)

  useEffect(() => {
    let mounted = true
    if (mounted) {
      setMount(true)
    }
    return () => {
      mounted = false
    }
  }, [paletteMode])

  if (!mount) return null

  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </NoSsr>
  )
}

export default MyApp

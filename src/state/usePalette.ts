import { PaletteMode } from '@mui/material'
import create from 'zustand'
import { persist } from 'zustand/middleware'
import type PaletteType from '../utils/types/PaletteType'

const usePalette = create<PaletteType, [['zustand/persist', PaletteMode]]>(
  persist(
    (set) => ({
      paletteMode: 'light' as PaletteMode,
      setPaletteMode: (mode) => set({ paletteMode: mode }),
    }),
    { name: 'palette-mode' }
  )
)

export default usePalette

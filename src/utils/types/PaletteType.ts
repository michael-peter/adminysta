import { PaletteMode } from '@mui/material'

export default interface PaletteType {
  paletteMode: PaletteMode
  setPaletteMode: (mode: PaletteMode) => void
}

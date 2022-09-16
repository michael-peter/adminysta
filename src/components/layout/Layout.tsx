import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'
import {
  CSSObject,
  Drawer as MuiDrawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Theme,
} from '@mui/material'
import { useState } from 'react'
import navLinks from '../../utils/components/navLinks'

export default function Layout(props: any) {
  const [open, setOpen] = useState(true)

  return (
    <Main>
      <Drawer variant='permanent' open={open}>
        <Aside open={open}>
          <List>
            {navLinks.map((navLink, index) => (
              <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    // px: 2.5,
                  }}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 2 : 'auto',
                      justifyContent: 'center',
                    }}>
                    {navLink.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={navLink.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <CloseButton disableRipple onClick={() => setOpen(!open)}>
            {open ? (
              <PlayArrowRoundedIcon sx={{ transform: 'rotate(180deg)' }} />
            ) : (
              <PlayArrowRoundedIcon />
            )}
          </CloseButton>
        </Aside>
      </Drawer>

      <section style={{ flexGrow: 1 }}>{props.children}</section>
    </Main>
  )
}

const Main = styled('main')(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(2),
  gap: theme.spacing(2),
}))

const Aside = styled('aside', {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ theme, open }) => ({
  position: 'relative',
  height: '100%',
  margin: theme.spacing(2),
  borderRadius: open ? theme.spacing(2) : theme.spacing(1),
  background: theme.palette.background.paper,
  boxShadow: `1px 4px 16px ${
    theme.palette.mode === 'light' ? 'lightgray' : 'black'
  }`,
}))

const drawerWidth = 200

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  borderRight: 'unset',
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  borderRight: 'unset',
  width: `calc(${theme.spacing(7)} + ${theme.spacing(4)})`, // ListButton width + Aside margin x2
})

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

const CloseButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  position: 'absolute',
  right: `-${theme.spacing(2)}`,
  bottom: theme.spacing(2),
  background: theme.palette.background.default,

  '&:hover': {
    background: theme.palette.background.default,
  },
}))

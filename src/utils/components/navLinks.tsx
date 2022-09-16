import {
  AutoGraphRounded,
  DashboardRounded,
  LocalOfferOutlined,
  PeopleRounded,
} from '@mui/icons-material'
import NavLinkType from '../types/NavLinkType'

const navLinks: NavLinkType[] = [
  { text: 'Dashboard', icon: <DashboardRounded /> },
  { text: 'Users', icon: <PeopleRounded /> },
  { text: 'Products', icon: <LocalOfferOutlined /> },
  { text: 'Analytics', icon: <AutoGraphRounded /> },
]

export default navLinks

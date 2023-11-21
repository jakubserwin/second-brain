import { BiVideoPlus } from 'react-icons/bi'
import { FaSpotify } from 'react-icons/fa'
import { RxDashboard } from 'react-icons/rx'
import { SidebarTab } from '@/types'

export const SIDEBAR_TABS: SidebarTab[] = [
  {
    label: 'Dashboard',
    icon: RxDashboard,
    color: '#220100',
  },
  {
    label: 'Videos',
    icon: BiVideoPlus,
    color: '#FF0000',
  },
  {
    label: 'Podcasts',
    icon: FaSpotify,
    color: '#1db954',
  },
]

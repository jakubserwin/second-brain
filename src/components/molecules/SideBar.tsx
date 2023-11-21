import { SIDEBAR_TABS } from '@/config'
import SideBarTab from '../atoms/SideBarTab'

export default function SideBar(): JSX.Element {
  return (
    <div className='flex  flex-col gap-3 rounded-xl border-2 border-gray-200 p-4'>
      {SIDEBAR_TABS.map((tab, index) => (
        <SideBarTab
          key={index}
          icon={tab.icon}
          label={tab.label}
          color={tab.color}
        />
      ))}
    </div>
  )
}

import { IconType } from 'react-icons'

interface Props {
  icon: IconType
  label: string
  color: string
}

export default function SideBarTab({
  icon: Icon,
  label,
  color,
}: Props): JSX.Element {
  return (
    <button className='flex items-center gap-4 rounded-lg bg-[#fff] px-4 py-3 text-sm font-semibold shadow-sm'>
      <Icon size={20} style={{ color }} />
      <p className='text-gray-700'>{label}</p>
    </button>
  )
}

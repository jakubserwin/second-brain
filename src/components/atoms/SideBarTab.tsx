import Link from 'next/link'
import { IconType } from 'react-icons'

interface Props {
  icon: IconType
  label: string
  color: string
  link: string
}

export default function SideBarTab({
  icon: Icon,
  label,
  color,
  link,
}: Props): JSX.Element {
  return (
    <Link
      className='flex items-center gap-4 rounded-lg bg-[#fff] px-4 py-3 text-sm font-semibold shadow-sm'
      href={link}
    >
      <Icon size={20} style={{ color }} />
      <p className='text-gray-700'>{label}</p>
    </Link>
  )
}

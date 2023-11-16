import Image from 'next/image'
import logo from '@/assets/images/logo.svg'

export default function NavBar() {
  return (
    <div className='flex items-center justify-between py-7'>
      <Image src={logo} alt='Flow Logo' width={54} />

      <div>user profile</div>
    </div>
  )
}

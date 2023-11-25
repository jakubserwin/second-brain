import Image from 'next/image'
import { getServerSession } from 'next-auth'
import logo from '@/assets/images/logo.svg'
import { authOptions } from '@/lib'
import UserProfile from './UserProfile'

export default async function NavBar(): Promise<JSX.Element> {
  const session = await getServerSession(authOptions)

  return (
    <div className='flex items-center justify-between py-7'>
      <Image src={logo} alt='Flow Logo' width={54} />

      <UserProfile user={session?.user} expires={session?.expires ?? ''} />
    </div>
  )
}

'use client'

import Image from 'next/image'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import { MdLogout } from 'react-icons/md'

type Props = Session

export default function UserProfile({ user }: Props): JSX.Element {
  const handleSignOut = () => {
    signOut({
      callbackUrl: '/',
    })
  }

  if (!user) {
    return <div>Some empty state</div>
  }

  const profileImage = user.image ? (
    <Image
      src={user.image}
      alt='User avatar'
      className='rounded-full'
      width={40}
      height={40}
    />
  ) : (
    <div>image placeholder</div>
  )

  return (
    <div className='flex items-center gap-3'>
      {profileImage}
      <div className='flex flex-col text-sm'>
        <p className='font-semibold text-gray-800'>{user.name}</p>
        <p className='text-gray-500'>{user.email}</p>
      </div>
      <button onClick={handleSignOut}>
        <MdLogout />
      </button>
    </div>
  )
}

'use client'
// TODO
// 4. dashboard layout UI
// - User Profile in NavBar
// - main section background padding etc.

import { FormEvent } from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import linesSrc from '@/assets/images/lines.svg'
import imageSrc from '@/assets/images/saly.png'
import GoogleButtonComponent from '@/components/GoogleButtonComponent'
import HeaderComponent from '@/components/HeaderComponent'

export default function SignUp() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    signIn('google', {
      callbackUrl: '/dashboard',
    })
  }

  return (
    <div className='flex h-full p-5'>
      <form
        className='flex flex-1 flex-col justify-center gap-12 px-16'
        onSubmit={e => handleSubmit(e)}
      >
        <HeaderComponent type='secondary' text='Sign Up' />
        <div>
          <GoogleButtonComponent />
        </div>
      </form>
      <div className='bg-primary-light relative flex flex-1 overflow-hidden rounded-3xl px-12'>
        <Image
          className='absolute left-0 top-0'
          src={linesSrc}
          alt='lines graphic'
        />
        <div className='mt-48 flex flex-col gap-4'>
          <HeaderComponent
            type='primary'
            text='Save your podcasts and videos in a better way with Bei'
          />
          <p className='text-grayish-blue-light'>
            Learn coding from scratch with best mentor and become expert in the
            next day! Supportive community, lots of expert will help you to
            improve your coding skill.
          </p>
          <Image
            className='absolute bottom-4 left-1/2 -translate-x-1/2'
            src={imageSrc}
            alt='Picture of a girl in front of desk'
            width={360}
          />
        </div>
      </div>
    </div>
  )
}

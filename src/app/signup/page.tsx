'use client'

// TODO
// 0. setup shadcn/ui
// 1. Create UI layout with card in the middle about signup with google
// 2. after successfull signup redirect to dashboard page
// 3. check nextauth session / route guard / middleware (?)
// 4. dashboard layout UI

import { FormEvent } from 'react'
import { signIn } from 'next-auth/react'

export default function SignUp() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    signIn('google', {
      callbackUrl: '/dashboard',
    })
  }

  // return (
  //   <form onSubmit={e => handleSubmit(e)}>
  //     <button type='submit'>Continue with Google</button>
  //   </form>
  // )

  return (
    <div className='flex h-full items-center justify-center'>
      <button onClick={handleSubmit}>test this button</button>
    </div>
  )
}

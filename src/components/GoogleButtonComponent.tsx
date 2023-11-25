import Image from 'next/image'
import iconSrc from '@/assets/icons/google-logo.svg'

export default function GoogleButtonComponent(): JSX.Element {
  return (
    <button className='flex items-center gap-3 rounded-md border border-grayish-blue-light px-8 py-3'>
      <Image src={iconSrc} alt='google logo' />
      <p className='font-medium'>Continue with Google</p>
    </button>
  )
}

import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import NavBar from '@/components/NavBar'
import { authOptions } from '@/lib'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/')
  }

  return (
    <div>
      <NavBar />
      signed in <br />
    </div>
  )
}

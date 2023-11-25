import NavBar from '@/components/molecules/NavBar'
import SideBar from '@/components/molecules/SideBar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='h-full bg-[#F7F8FA]'>
      <div className='container mx-auto flex h-full flex-col px-10'>
        <NavBar />
        <div className='flex h-full gap-10'>
          <div className='w-full max-w-[260px]'>
            <SideBar />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

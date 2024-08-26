import { SiteHeader } from '@/components/app/NavBar/site-header'
import { Outlet } from 'react-router-dom'

export default function Layout () {
  return (
    <div className='min-h-screen bg-background font-sans antialiased'>
      <div className='relative flex min-h-screen flex-col'>
        <SiteHeader
          toggleSidebar={function (): void {
            throw new Error('Function not implemented.')
          }} isSidebarVisible={false}
        />
        <div className='flex-1'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

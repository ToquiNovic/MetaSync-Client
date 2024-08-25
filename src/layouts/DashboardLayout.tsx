import { Outlet } from 'react-router-dom'
import { SiteHeader } from '@/components/app/NavBar/site-header'
import Sidebar from '@/components/app/Dashboard/Sidebar'
import { useSidebarStore } from '@/store/useSitebarStore'

function DashboardLayout () {
  const { isSidebarVisible, toggleSidebar } = useSidebarStore()

  return (
    <div className='flex h-screen overflow-hidden'>
      <Sidebar isCollapsible={!isSidebarVisible} />
      <div className={`flex-1 flex flex-col transition-all duration-500 ${isSidebarVisible ? 'ml-64' : 'ml-16'}`}>
        <SiteHeader toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />
        <main className='flex-1 p-4 bg-gray-500'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout

import { MainNav } from '@/components/app/NavBar/main-nav'
import { ThemeToggle } from '@/components/app/NavBar/theme-toggle'
import { siteConfig } from '@/config/site'
import AvatarUser from '@/components/app/NavBar/avatar'

export function SiteHeader () {
  return (
    <div className='grid'>
      <header className='sticky top-0 z-40 w-full border-b bg-background'>
        <div className='container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
          <a href='/' className='flex items-center space-x-2'>
            <img src='/metasync-logo.webp' alt='' className='h-6 w-6' />
            <span className='inline-block font-bold'>MetaSync</span>
          </a>
          <div className='flex flex-1 items-center justify-end space-x-4'>
            <nav className='flex items-center space-x-1'>
              <MainNav items={siteConfig.mainNav} />
              <ThemeToggle />
              <AvatarUser />
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

import { useState } from 'react'
import { MainNav } from '@/components/app/NavBar/main-nav'
import { ThemeToggle } from '@/components/app/NavBar/theme-toggle'
import { siteConfig } from '@/config/site'
import AvatarUser from '@/components/app/NavBar/avatar'
import { Menu, X } from 'lucide-react'

export function SiteHeader () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background'>
      <div className='container flex h-16 items-center justify-between px-4 sm:px-0'>
        <a href='/' className='flex items-center space-x-2'>
          <img src='/metasync-logo.webp' alt='MetaSync Logo' className='h-6 w-6' />
          <span className='inline-block font-bold'>MetaSync</span>
        </a>
        <div className='flex items-center space-x-4 sm:space-x-1'>
          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className='block sm:hidden text-2xl focus:outline-none'
          >
            {isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          </button>
          {/* Main Navigation */}
          <nav
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } flex-col items-center absolute top-16 left-0 w-full sm:w-auto bg-background p-4 sm:p-0 sm:static sm:flex-row sm:flex space-y-2 sm:space-y-0 sm:space-x-4 transition-all duration-300 sm:transition-none`}
          >
            <MainNav items={siteConfig.mainNav} />
            <ThemeToggle />
            <AvatarUser />
          </nav>
        </div>
      </div>
    </header>
  )
}

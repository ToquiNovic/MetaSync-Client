import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Label } from '@radix-ui/react-label'
import { BarChart3, User, Layers, PieChart, Plane, Folder } from 'lucide-react'

interface SidebarProps {
  isCollapsible: boolean;
}

export default function Sidebar ({ isCollapsible }: SidebarProps) {
  const menuItems = [
    { label: 'Tableros', icon: BarChart3 },
    { label: 'Equipos', icon: Layers },
    { label: 'Sensores', icon: PieChart },
    { label: 'Usuarios', icon: User }
  ]

  return (
    <div className='fixed h-screen bg-background border-r shadow-md flex'>
      {/* Parte fija: Menú principal */}
      <div className='w-16 flex flex-col items-center py-4 border-r'>
        <div className='w-15 h-15 bg-red-500 rounded-sm flex items-center justify-center mb-8'>
          <img src='/metasync-logo.webp' alt='MetaSync Logo' className='h-10 w-10' />
        </div>
        <nav className='flex flex-col space-y-5 py-4'>
          {menuItems.map((item, index) => (
            <div key={index} className='relative group'>
              <Button variant='ghost' size='icon' className='text-gray-400 hover:text-gray-600'>
                <item.icon className='h-5 w-5' />
              </Button>
              <span className='absolute left-full ml-2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 whitespace-nowrap'>
                {item.label}
              </span>
            </div>
          ))}
        </nav>
      </div>

      {/* Parte colapsable: Opciones adicionales */}
      <div className={`transition-width duration-500 ${isCollapsible ? 'w-0 overflow-hidden' : 'w-48'} flex flex-col`}>
        <div className={`p-4 ${isCollapsible ? 'hidden' : 'block'}`}>
          <Label className='text-sm font-medium mb-4'>Dashboard</Label>
          <ScrollArea className='flex-1'>
            <nav className='flex flex-col space-y-4'>
              <Button variant='ghost' className='w-full justify-start text-gray-400 hover:text-gray-600'>
                <Plane className='h-5 w-5 mr-3' />
                <span>Analytics</span>
              </Button>
              <Button variant='ghost' className='w-full justify-start text-gray-400 hover:text-gray-600'>
                <Folder className='h-5 w-5 mr-3' />
                <span>Ecommerce</span>
              </Button>
              <Button variant='ghost' className='w-full justify-start text-gray-400 hover:text-gray-600'>
                <Layers className='h-5 w-5 mr-3' />
                <span>Project</span>
              </Button>
            </nav>
          </ScrollArea>
        </div>
        <div className='fixed bottom-1 left-15 z-50 flex items-center justify-center p-3'>
          <div className='flex items-center space-x-3'>
            <div>
              <p className='font-medium'>Dashtail</p>
              <p className='text-sm text-gray-500'>dashtail@codeshaper.net</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

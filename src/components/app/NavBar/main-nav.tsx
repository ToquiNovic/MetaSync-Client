import { cn } from '@/lib/utils'
import { NavItem } from '@/types/nav'

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav ({ items }: MainNavProps) {
  return (
    <div className='flex gap-6 md:gap-10'>

      {items?.length
        ? (
          <nav className='flex gap-6'>
            {items?.map(
              (item, index) =>
                item.href && (
                  <a
                    key={index}
                    href={item.href}
                    className={cn(
                      'flex items-center text-sm font-medium text-muted-foreground',
                      item.disabled && 'cursor-not-allowed opacity-80'
                    )}
                  >
                    {item.title}
                  </a>
                )
            )}
          </nav>
          )
        : null}
    </div>
  )
}

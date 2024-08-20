import { FC, SVGProps, ReactNode } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { JSX } from 'react/jsx-runtime'

interface StepThreeProps {
  onPrevious: () => void;
  onNext: () => void;
}

const StepThree: FC<StepThreeProps> = ({ onPrevious, onNext }) => {
  return (
    <div className='flex flex-col gap-6'>
      {/* Crear un equipo */}
      <Card className='p-6 flex flex-col items-center justify-between'>
        <CardHeader className='flex flex-col items-center gap-4'>
          <IconWrapper>
            <UsersIcon className='w-6 h-6 text-primary-foreground' />
          </IconWrapper>
          <CardTitle className='text-xl font-semibold'>Crear un equipo</CardTitle>
        </CardHeader>
        <Button>Crear un equipo</Button>
      </Card>

      {/* Unirse a un equipo con un código */}
      <Card className='p-6 flex flex-col items-center justify-between'>
        <CardHeader className='flex flex-col items-center gap-4'>
          <IconWrapper>
            <KeyIcon className='w-6 h-6 text-secondary-foreground' />
          </IconWrapper>
          <CardTitle className='text-xl font-semibold'>Unirse a un equipo con un código</CardTitle>
        </CardHeader>
        <CardContent className='w-full'>
          <Input placeholder='Enter code' />
          <p className='mt-2 text-sm text-muted-foreground'>¿Tiene un código para unirse a un equipo? Introdúzcalo más arriba.</p>
        </CardContent>
        <Button variant='secondary'>Unirse al equipo</Button>
      </Card>

      {/* Navegación */}
      <div className='flex justify-between w-full mt-6'>
        <Button variant='outline' onClick={onPrevious}>Anterior</Button>
        <Button onClick={onNext}>Siguiente</Button>
      </div>
    </div>
  )
}

export default StepThree

interface IconWrapperProps {
  children: ReactNode;
}

const IconWrapper: FC<IconWrapperProps> = ({ children }) => (
  <div className='bg-primary rounded-md p-3 flex items-center justify-center'>
    {children}
  </div>
)

function KeyIcon (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4' />
      <path d='m21 2-9.6 9.6' />
      <circle cx='7.5' cy='15.5' r='5.5' />
    </svg>
  )
}

function UsersIcon (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
      <circle cx='9' cy='7' r='4' />
      <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
      <path d='M16 3.13a4 4 0 0 1 0 7.75' />
    </svg>
  )
}

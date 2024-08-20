// StepOne.tsx
import { useState, useEffect, FC, SVGProps } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { CardContent, CardFooter } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { JSX } from 'react/jsx-runtime'

interface StepOneProps {
    onNext: () => void;
  }

const StepOne: FC<StepOneProps> = ({ onNext }) => {
  const [isLoading, setIsLoading] = useState(true)

  const loadData = () => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className='space-y-4'>
      {isLoading
        ? (
          <>
            <Skeleton className='h-4 w-full my-2' />
            <Skeleton className='h-4 w-full my-2' />
            <Skeleton className='h-8 w-32 my-2' />
          </>
          )
        : (
          <>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='email'>Correo Electronico</Label>
                <Input id='email' type='email' placeholder='example@email.com' required />
              </div>
              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <Label htmlFor='password'>Contraseña</Label>
                </div>
                <Input id='password' type='password' required />
              </div>
              <Separator className='my-4' />
              <div className='space-y-2'>
                <Button variant='outline' className='w-full'>
                  <ChromeIcon className='mr-2 h-5 w-5' />
                  Registrarse con Google
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant='ghost' className='w-full' />
              <Button onClick={onNext}>Siguiente</Button>
            </CardFooter>
          </>
          )}
    </div>
  )
}

export default StepOne

function ChromeIcon (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx='12' cy='12' r='10' />
      <circle cx='12' cy='12' r='4' />
      <line x1='21.17' x2='12' y1='8' y2='8' />
      <line x1='3.95' x2='8.54' y1='6.06' y2='14' />
      <line x1='10.88' x2='15.46' y1='21.94' y2='14' />
    </svg>
  )
}

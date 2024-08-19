import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { SVGProps } from 'react'
import { JSX } from 'react/jsx-runtime'

export default function FormLogin () {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Card className='w-full max-w-md'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold'>Iniciar Sesión</CardTitle>
          <CardDescription>Ingresa tus credenciales para iniciar sesión</CardDescription>
        </CardHeader>
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
              Iniciar Sesión con Google
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button type='submit' className='w-full'>
            Iniciar Sesión
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

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

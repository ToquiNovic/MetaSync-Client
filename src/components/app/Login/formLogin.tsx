import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Chrome } from 'lucide-react'
import { FormEvent } from 'react'

export default function FormLogin () {
  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className='container grid items-center gap-6 pb-8 pt-20 md:py-10'>
      <Card className='w-full max-w-md'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold'>Iniciar Sesión</CardTitle>
          <CardDescription>Ingresa tus credenciales para iniciar sesión</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='email'>Correo Electrónico</Label>
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
                <Chrome className='mr-2 h-5 w-5' />
                Iniciar Sesión con Google
              </Button>
            </div>
          </CardContent>
          <CardFooter className='flex flex-col space-y-2'>
            <Button type='submit' className='w-full'>
              Iniciar Sesión
            </Button>
            <div className='text-left mt-2'>
              <Label>
                <Link to='/register' className='text-sm hover:underline'>
                  ¿No tienes una cuenta? Regístrate
                </Link>
              </Label>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

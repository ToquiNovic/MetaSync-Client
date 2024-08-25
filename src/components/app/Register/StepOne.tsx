// stepOne.tsx
import { FC } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import LoadingButton from '@/components/app/Register/LoadingButton'
import { Button } from '@/components/ui/button'
import { Chrome } from 'lucide-react'
import { Link } from 'react-router-dom'
import useFormStore from '@/store/useFormStore'

interface StepOneProps {
  onNext: () => void;
}

const StepOne: FC<StepOneProps> = ({ onNext }) => {
  const { stepOneData, setStepOneData } = useFormStore()

  const handleNextClick = () => {
    onNext()
  }

  return (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <Label htmlFor='email' className='text-primary-foreground'>Correo Electrónico</Label>
        <Input
          id='email'
          type='email'
          value={stepOneData.email}
          onChange={(e) => setStepOneData({
            email: e.target.value,
            password: stepOneData.password
          })}
          placeholder='example@email.com'
          required
        />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='password' className='text-primary-foreground'>Contraseña</Label>
        <Input
          id='password'
          type='password'
          value={stepOneData.password}
          onChange={(e) => setStepOneData({
            password: e.target.value,
            email: stepOneData.email
          })}
          required
        />
      </div>

      <Separator className='my-4' />

      <div className='space-y-2'>
        <Button variant='outline' className='w-full'>
          <Chrome className='mr-2 h-5 w-5' />
          Iniciar Sesión con Google
        </Button>
      </div>

      <div className='flex justify-between items-center'>
        <Label>
          <Link to='/login' className='text-sm hover:underline'>
            ¿Ya tienes una cuenta? Inicia sesión
          </Link>
        </Label>
        <LoadingButton onClick={handleNextClick} label='Siguiente' />
      </div>
    </div>
  )
}

export default StepOne

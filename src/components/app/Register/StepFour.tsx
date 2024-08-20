// StepFour.tsx
import { FC } from 'react'
import { Button } from '@/components/ui/button'

interface StepFourProps {
  onPrevious: () => void;
}

const StepFour: FC<StepFourProps> = ({ onPrevious }) => {
  return (
    <div className='space-y-4'>
      <div className='text-center'>
        <h2 className='text-2xl font-bold'>Registro Completado!</h2>
        <p>Gracias por registrarte con nosotros.</p>
      </div>
      <div className='flex justify-between w-full mt-6'>
        <Button variant='outline' onClick={onPrevious}>Anterior</Button>
        <Button>Finalizar</Button>
      </div>
    </div>
  )
}

export default StepFour
